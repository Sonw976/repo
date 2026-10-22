import { AUDIO_ASSETS } from "./assets.js";

export const UI_FONT = "'Tahoma','Arial','Helvetica',sans-serif";

export const LOOK_SENS = 0.0032;
export const PITCH_LIMIT = 1.3;
// Xuất phát phía trong phòng, ngay trước cửa chính và nhìn vào không gian trưng bày.
export const SPAWN_POS = Object.freeze({ x: 0, z: -17.35 });
export const EYE_Y = 2.5;
export const WALL_H = 10.5;
export const MARGIN = 0.55;

export const RED = 0xe3000f;
export const BLUE = 0x005baa;
export const GREEN = 0x009688;
export const GOLD = 0xfff200;

export const R_CORE = 7.75;
export const R_OUTER = 18.5;
export const WALL_THICK = 0.4;
// Ranh giới cụm được mở; chỉ giữ 0,5 đơn vị vách sát tường ngoài.
export const BOUNDARY_GAP = Object.freeze({ r0: R_CORE, r1: R_OUTER - 0.5 });
export const FRAME_DEPTH = 0.12;
export const WALL_MOUNT_GAP = 0.15;
export const WALL_MOUNT_R = R_OUTER - WALL_THICK / 2 - WALL_MOUNT_GAP - FRAME_DEPTH / 2;
export const MID_R = (R_CORE + R_OUTER) / 2;
export const BOUNDARIES = Object.freeze([Math.PI / 6, Math.PI * 5 / 6]);

const zoneDefinitions = [
  {
    id: 1,
    name: "Cụm 1 · Yêu nước Cách mạng",
    color: RED,
    // Phiên bản LTR: bắt đầu ngay bên trái lối vào và đi về phía Cụm 2.
    a0: -Math.PI / 2,
    a1: Math.PI / 6,
    audio: AUDIO_ASSETS.zone1,
    track: "Bác Đang Cùng Chúng Cháu Hành Quân"
  },
  {
    id: 2,
    name: "Cụm 2 · Tình nguyện & Sư phạm",
    color: GREEN,
    a0: Math.PI / 6,
    a1: Math.PI * 5 / 6,
    audio: AUDIO_ASSETS.zone2,
    track: "Thanh Niên Làm Theo Lời Bác (Đoàn ca)"
  },
  {
    id: 3,
    name: "Cụm 3 · Học tập & NCKH",
    color: BLUE,
    // Phiên bản LTR: kết thúc hành trình ở phía phải lối vào.
    a0: Math.PI * 5 / 6,
    a1: Math.PI * 3 / 2,
    audio: AUDIO_ASSETS.zone3,
    track: "Giai điệu Trí tuệ (Mozart)"
  }
];

export const ZONES = Object.freeze(zoneDefinitions.map(zone => Object.freeze({
  ...zone,
  mid: (zone.a0 + zone.a1) / 2
})));

export function getZoneById(id) {
  const zone = ZONES.find(item => item.id === id);
  if (!zone) throw new Error(`Không tìm thấy cấu hình Cụm ${id}`);
  return zone;
}
