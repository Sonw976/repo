import * as THREE from 'three';
import { createSRGBCanvasTexture, bendGeometry, faceCoreRotY } from '../geometry/radial-geometry.js';

export const GENERAL_INTRODUCTION_TITLE = '';
export const GENERAL_INTRODUCTION_TEXT =
    'Lịch sử Đoàn Thanh niên Trường Đại học Sư phạm Hà Nội không chỉ là dòng chảy của thời gian, mà là hành trình của những thế hệ trí thức trẻ mang trong mình lý tưởng, trách nhiệm và khát vọng cống hiến. Từ giảng đường đến thực tiễn, từ chiến tranh đến hòa bình, tuổi trẻ Sư phạm luôn đồng hành cùng dân tộc – học tập, hành động và lan tỏa giá trị.';

export const VER2_INTRODUCTION_TITLE = 'TRUYỀN THỐNG ĐƯỢC BIẾN THÀNH HÀNH ĐỘNG';
export const VER2_INTRODUCTION_TEXT = [
    'Trường Đại học Sư phạm Hà Nội là nơi khởi nguồn phong trào “Ba sẵn sàng” (1964), phong trào “Xếp bút nghiên lên đường ra trận” thời kỳ kháng chiến chống Mỹ, các đợt đắp đê chống lũ và phục vụ chiến đấu bảo vệ biên giới. Cùng với đó là các hoạt động tình nguyện thời bình qua bản đồ nhiệt tại 34 tỉnh, thành phố, sáng kiến mô hình “Tình nguyện đồng hương”, các chiến dịch Mùa hè xanh, Tiếp sức mùa thi, Đội hình “Bình dân học vụ số” và các chương trình hiến máu nhân đạo.',
    'Ở mảng học tập và nghiên cứu khoa học, khu vực trưng bày giới thiệu chân dung các nhà khoa học tiêu biểu gắn bó với Nhà trường từ những ngày đầu thành lập như GS. Lê Văn Thiêm, GS. Đặng Thai Mai, GS. Phan Nguyên Hồng, đến các nhà nghiên cứu trẻ như GS. Phạm Hoàng Hiệp, GS. Nguyễn Quang Diệu. Đồng thời, không gian phản ánh phong trào nghiên cứu khoa học sôi nổi của sinh viên các khoa và những công trình đạt giải cao tại Giải thưởng Sinh viên NCKH Euréka toàn quốc cùng Giải thưởng cấp Bộ trong những năm gần đây.'
].join('\n\n');

function wrapCenteredText(ctx, text, centerX, startY, maxWidth, lineHeight) {
    let y = startY;
    String(text).split(/\n\s*\n/).forEach((paragraph, paragraphIndex) => {
        const words = paragraph.split(/\s+/);
        const lines = [];
        let line = '';
        words.forEach((word) => {
            const candidate = line ? `${line} ${word}` : word;
            if (line && ctx.measureText(candidate).width > maxWidth) {
                lines.push(line);
                line = word;
            } else line = candidate;
        });
        if (line) lines.push(line);
        lines.forEach((value) => {
            ctx.fillText(value, centerX, y);
            y += lineHeight;
        });
        if (paragraphIndex < String(text).split(/\n\s*\n/).length - 1) y += lineHeight * 0.55;
    });
    return y;
}

function createIntroductionTexture(fontFamily, title, text) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    const background = ctx.createLinearGradient(0, 0, 0, canvas.height);
    background.addColorStop(0, '#fffefe');
    background.addColorStop(1, '#eaf4ff');
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const isExtended = Boolean(title);
    ctx.fillStyle = '#0f5daa';
    ctx.font = `italic 900 ${isExtended ? 66 : 74}px ${fontFamily}`;
    ctx.fillText('LỜI DẪN TỔNG QUÁT', canvas.width / 2, 112);

    ctx.fillStyle = '#9a2a20';
    ctx.font = `900 38px ${fontFamily}`;
    if (title) ctx.fillText(title, canvas.width / 2, 196);

    ctx.strokeStyle = 'rgba(164,111,34,.78)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    const dividerY = isExtended ? 244 : 192;
    ctx.moveTo(300, dividerY);
    ctx.lineTo(canvas.width - 300, dividerY);
    ctx.stroke();

    ctx.fillStyle = '#10263a';
    ctx.font = `${isExtended ? 500 : 700} ${isExtended ? 30 : 46}px ${fontFamily}`;
    wrapCenteredText(ctx, text, canvas.width / 2, isExtended ? 292 : 290, isExtended ? 1760 : 1650, isExtended ? 43 : 72);

    return createSRGBCanvasTexture(canvas);
}

function createCurvedHorizontalRail(width, height, depth, radius, material) {
    const geometry = new THREE.BoxGeometry(width, height, depth, 40, 1, 1);
    geometry.translate(0, 0, depth / 2);
    bendGeometry(geometry, -radius);
    return new THREE.Mesh(geometry, material);
}

function addCurvedFrameLayer({
    scene, centerAngle, radius, width, height, railWidth, depth, material, inset = 0
}) {
    const framedWidth = width - inset * 2;
    const framedHeight = height - inset * 2;
    const centerX = Math.cos(centerAngle) * radius;
    const centerZ = Math.sin(centerAngle) * radius;
    const rotationY = faceCoreRotY(centerAngle) + Math.PI;

    [-1, 1].forEach((side) => {
        const horizontal = createCurvedHorizontalRail(
            framedWidth + railWidth,
            railWidth,
            depth,
            radius,
            material
        );
        horizontal.position.set(centerX, 4.75 + side * framedHeight / 2, centerZ);
        horizontal.rotation.y = rotationY;
        scene.add(horizontal);
    });

    const halfAngle = framedWidth / (2 * radius);
    [centerAngle - halfAngle, centerAngle + halfAngle].forEach((edgeAngle) => {
        const vertical = new THREE.Mesh(
            new THREE.BoxGeometry(railWidth, framedHeight + railWidth, depth),
            material
        );
        vertical.position.set(
            Math.cos(edgeAngle) * radius,
            4.75,
            Math.sin(edgeAngle) * radius
        );
        vertical.rotation.y = faceCoreRotY(edgeAngle) + Math.PI;
        scene.add(vertical);
    });
}

export function createGeneralIntroduction({
    scene, radius, wallThickness, fontFamily, angle = -Math.PI / 2,
    title = GENERAL_INTRODUCTION_TITLE, text = GENERAL_INTRODUCTION_TEXT
}) {
    const width = 6.9;
    const height = 3.45;
    const surfaceRadius = radius + wallThickness / 2 + 0.035;
    const geometry = new THREE.PlaneGeometry(width, height, 40, 1);
    bendGeometry(geometry, -surfaceRadius);
    const material = new THREE.MeshStandardMaterial({
        map: createIntroductionTexture(fontFamily, title, text),
        roughness: 0.72,
        metalness: 0.02,
        emissive: 0xffffff,
        emissiveIntensity: 0.04,
        side: THREE.DoubleSide
    });
    const panel = new THREE.Mesh(geometry, material);
    panel.position.set(Math.cos(angle) * surfaceRadius, 4.75, Math.sin(angle) * surfaceRadius);
    panel.rotation.y = faceCoreRotY(angle) + Math.PI;
    panel.renderOrder = 3;
    panel.userData.type = 'general-introduction';
    scene.add(panel);

    // Khung kép mảnh: gỗ sáng ở ngoài, nẹp đồng nhỏ ở trong. Hai lớp được
    // tách nhẹ theo bán kính để không z-fighting với bảng và với nhau.
    const woodMaterial = new THREE.MeshStandardMaterial({
        color: 0x9a744f,
        roughness: 0.68,
        metalness: 0.04
    });
    const metalMaterial = new THREE.MeshStandardMaterial({
        color: 0xc6a25c,
        roughness: 0.30,
        metalness: 0.58,
        emissive: 0x3a260d,
        emissiveIntensity: 0.08
    });
    addCurvedFrameLayer({
        scene,
        centerAngle: angle,
        radius: surfaceRadius + 0.025,
        width,
        height,
        railWidth: 0.105,
        depth: 0.07,
        material: woodMaterial
    });
    addCurvedFrameLayer({
        scene,
        centerAngle: angle,
        radius: surfaceRadius + 0.07,
        width,
        height,
        railWidth: 0.035,
        depth: 0.035,
        material: metalMaterial,
        inset: 0.15
    });
    return panel;
}
