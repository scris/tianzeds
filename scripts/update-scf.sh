#!/usr/bin/env bash
set -euo pipefail

# Update existing Tencent Cloud SCF function code only (no creation, no API GW)
# Prefers COS upload to avoid command-line size limits. Falls back to base64 for small zips.

# Config via env (override as needed):
#   REGION=ap-guangzhou FUNCTION_NAME=tianzeds
#   COS_BUCKET=your-bucket-123 REGION=ap-guangzhou COS_PREFIX=scf/packages

REGION=${REGION:-ap-guangzhou}
FUNCTION_NAME=${FUNCTION_NAME:-tianzeds}
ZIP_PATH=".scf/site.zip"

echo "[1/3] Build and package…"
pnpm run scf:package >/dev/null

if [[ ! -f "$ZIP_PATH" ]]; then
  echo "Zip not found at $ZIP_PATH" >&2
  exit 1
fi

# If COS is configured, upload then update via COS reference
if [[ -n "${COS_BUCKET:-}" ]]; then
  COS_PREFIX=${COS_PREFIX:-scf}
  TS=$(date +%Y%m%d-%H%M%S)
  OBJ_NAME="$COS_PREFIX/site-$TS.zip"
  echo "[2/3] Uploading to COS: cos://$COS_BUCKET/$OBJ_NAME (region=$REGION)…"

  if command -v coscli >/dev/null 2>&1; then
    coscli cp "$ZIP_PATH" "cos://$COS_BUCKET/$OBJ_NAME" --storage-class STANDARD --recursive=false
  elif command -v coscmd >/dev/null 2>&1; then
    coscmd upload "$ZIP_PATH" "$OBJ_NAME"
  else
    echo "Neither coscmd nor coscli found. Please install one, or unset COS_BUCKET to use base64 fallback." >&2
    exit 2
  fi

  echo "[3/3] Updating function code via COS reference…"
  tccli scf UpdateFunctionCode \
    --region "$REGION" \
    --FunctionName "$FUNCTION_NAME" \
    --CosBucketName "$COS_BUCKET" \
    --CosBucketRegion "$REGION" \
    --CosObjectName "$OBJ_NAME"
  exit 0
fi

# Fallback: inline base64 for small packages
ZIP_SIZE=$(stat -f%z "$ZIP_PATH" 2>/dev/null || stat -c%s "$ZIP_PATH")
if (( ZIP_SIZE > 5000000 )); then
  echo "Package is $(printf '%.1f' "$(echo "$ZIP_SIZE/1048576" | bc -l)") MB; too large for inline base64 reliably." >&2
  echo "Please configure COS upload by setting COS_BUCKET and REGION, e.g.:" >&2
  echo "  COS_BUCKET=your-bucket REGION=ap-guangzhou COS_PREFIX=scf pnpm run scf:update" >&2
  exit 3
fi

echo "[2/2] Updating function code via inline base64…"
ZIP_B64=$(base64 < "$ZIP_PATH" | tr -d '\n')
tccli scf UpdateFunctionCode \
  --Region "$REGION" \
  --FunctionName "$FUNCTION_NAME" \
  --ZipFile "$ZIP_B64"

