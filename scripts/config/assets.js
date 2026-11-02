export const AUDIO_ASSETS = Object.freeze({
  zone1: "nhac-cum1-bac-dang-cung-chung-chau-hanh-quan.mp3",
  zone2: "nhac-cum2-doan-ca-thanh-nien-lam-theo-loi-bac.mp3",
  zone3: "media/mozart-symphony-40.ogg"
});

export const MEDIA_ASSETS = Object.freeze({
  lobbyVideo: "media/lobby.mp4"
});

export function placeholderImage(width, height, background, text) {
  const safe=String(text).replace(/[&<>"']/g,' ');
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#${background}"/><text x="50%" y="50%" text-anchor="middle" fill="white" font-family="Arial" font-size="32">${safe}</text></svg>`);
}
