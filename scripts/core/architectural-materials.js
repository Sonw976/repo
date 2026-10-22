import * as THREE from 'three';

// Bảng vật liệu kiến trúc được chuyển từ hệ phòng trong Tài liệu/scripts.
// Chỉ ngôn ngữ vật liệu được dùng lại; hình học vẫn do phòng tròn Chủ đề 3 dựng.
export const ARCHITECTURE_COLORS = Object.freeze({
  wall: 0xf6efe2,
  wallEmissive: 0xeee5d4,
  ceiling: 0xfffbf2,
  floor: 0x8fa9bb,
  trim: 0xb87333,
  baseboard: 0xf7f5f0,
  baseboardGrout: 0xcad5df
});

export function createCircularArchitectureMaterials() {
  return {
    floor: new THREE.MeshStandardMaterial({
      color: ARCHITECTURE_COLORS.floor, roughness: .82, metalness: 0,
      side: THREE.DoubleSide
    }),
    wall: new THREE.MeshStandardMaterial({
      color: ARCHITECTURE_COLORS.wall, roughness: .86,
      emissive: ARCHITECTURE_COLORS.wallEmissive, emissiveIntensity: .06
    }),
    innerWall: new THREE.MeshStandardMaterial({
      color: ARCHITECTURE_COLORS.wall, roughness: .86,
      emissive: ARCHITECTURE_COLORS.wallEmissive, emissiveIntensity: .06
    }),
    trim: new THREE.MeshStandardMaterial({
      color: ARCHITECTURE_COLORS.trim, roughness: .3, metalness: .55
    }),
    baseboard: new THREE.MeshStandardMaterial({
      color: ARCHITECTURE_COLORS.baseboard, roughness: .72, metalness: .02
    }),
    baseboardGrout: new THREE.MeshStandardMaterial({
      color: ARCHITECTURE_COLORS.baseboardGrout, roughness: .82, metalness: 0
    }),
    ceiling: new THREE.MeshStandardMaterial({
      color: ARCHITECTURE_COLORS.ceiling, roughness: .88,
      emissive: 0xfff6d8, emissiveIntensity: .04, side: THREE.DoubleSide
    })
  };
}
