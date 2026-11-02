#!/usr/bin/env bash
# Deploy the static export to the SFTP host via rsync.
# Run this yourself in a terminal — it will prompt you for the SFTP
# password interactively. Nothing here stores or transmits the password
# anywhere except directly to the SSH connection you initiate.
set -euo pipefail

HOST="u63776985.1and1-data.host"
USERNAME="u63776985"
REMOTE_PATH="/tibormade.com"

# Set to true only once you've checked a dry run and are happy for the
# remote folder to exactly mirror local `out/` (this REMOVES remote files
# that no longer exist locally).
DELETE_REMOTE_EXTRAS=false

cd "$(dirname "$0")"

echo "Building static export..."
npm run build

echo "Uploading out/ to ${USERNAME}@${HOST}:${REMOTE_PATH} ..."
echo "You'll be prompted for the SFTP password below."
if [ "$DELETE_REMOTE_EXTRAS" = true ]; then
  rsync -avz --progress --delete -e ssh out/ "${USERNAME}@${HOST}:${REMOTE_PATH}/"
else
  rsync -avz --progress -e ssh out/ "${USERNAME}@${HOST}:${REMOTE_PATH}/"
fi

echo "Done."
