import * as THREE from 'three';
import { R_CORE, R_OUTER, ZONES, BOUNDARIES } from '../config/scene-config-ltr.js';

const entries = [
    {id:1, label:'Yêu nước Cách mạng',color:'#bf3844'},
    {id:2, label:'Tình nguyện và Sư phạm',color:'#159988'},
    {id:3, label:'Học tập và NCKH',color:'#368bd3'}
];
const point=(r,a)=>`${(r*Math.cos(a)).toFixed(4)},${(r*Math.sin(a)).toFixed(4)}`;
function sector(a0,a1){
    return `M${point(R_OUTER,a0)} A${R_OUTER},${R_OUTER} 0 0 1 ${point(R_OUTER,a1)} L${point(R_CORE,a1)} A${R_CORE},${R_CORE} 0 0 0 ${point(R_CORE,a0)} Z`;
}

export function createRoomMinimap(){
    const panel=document.createElement('aside');
    panel.className='cd3-room-map';
    panel.setAttribute('aria-label','Sơ đồ phòng và vị trí tham quan');
    panel.innerHTML=`<svg class="cd3-room-map-diagram" viewBox="-22 -22 44 48" role="img" aria-label="Mặt bằng ba vùng trưng bày, cửa ở phía dưới">
      <g transform="scale(-1,-1)">
      ${ZONES.map(z=>`<path data-map-zone="${z.id}" d="${sector(z.a0,z.a1)}" fill="${entries.find(e=>e.id===z.id).color}"/>`).join('')}
      <circle r="${R_OUTER}" fill="none" stroke="#d6b86f" stroke-width=".4"/>
      <circle r="${R_CORE}" fill="#f6e8c9" stroke="#d6b86f" stroke-width=".4"/>
      ${BOUNDARIES.map(a=>`<path d="M${point(R_OUTER-.5,a)}L${point(R_OUTER,a)}" stroke="#fff4d6" stroke-width=".65"/>`).join('')}
      <path d="M-1.8,-${R_OUTER}h3.6" stroke="#fff4d6" stroke-width=".85"/>
      <g class="cd3-map-player"><path d="M0,-2.2L-1.1,.1L1.1,.1Z" fill="#fff" stroke="#174f82" stroke-width=".18"/><circle r=".8" fill="#d71939" stroke="#fff" stroke-width=".3"/></g>
      </g><text x="0" y="24" text-anchor="middle" fill="#fff4d6" font-size="2.2">Cửa vào</text>
      </svg><ul class="cd3-room-map-legend">${entries.map(e=>`<li data-map-legend="${e.id}"><span style="background:${e.color}" aria-hidden="true"></span>${e.label}</li>`).join('')}</ul>`;
    document.body.appendChild(panel);
    const marker=panel.querySelector('.cd3-map-player');
    const direction=new THREE.Vector3();
    let previousTransform='',previousZone=-1;
    return camera=>{
        camera.getWorldDirection(direction);
        const transform=`translate(${camera.position.x.toFixed(2)} ${camera.position.z.toFixed(2)}) rotate(${(Math.atan2(direction.x,-direction.z)*180/Math.PI).toFixed(1)})`;
        if(transform!==previousTransform){marker.setAttribute('transform',transform);previousTransform=transform;}
        const radius=Math.hypot(camera.position.x,camera.position.z);
        let angle=Math.atan2(camera.position.z,camera.position.x);
        if(angle<0)angle+=2*Math.PI;
        const isEntrance=camera.position.z < -R_CORE && Math.abs(camera.position.x)<3.5;
        const zone=radius>R_CORE && !isEntrance ? ZONES.find(z=>[angle,angle-2*Math.PI].some(a=>a>=z.a0&&a<z.a1))?.id||0 : 0;
        if(zone!==previousZone){
            panel.querySelectorAll('[data-map-legend]').forEach(el=>{
                const active=Number(el.dataset.mapLegend)===zone;
                el.classList.toggle('is-active',active);
                if(active)el.setAttribute('aria-current','location');else el.removeAttribute('aria-current');
            });
            previousZone=zone;
        }
    };
}
