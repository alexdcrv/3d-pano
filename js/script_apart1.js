const container = document.querySelector("#container");
const points = document.querySelectorAll(".point");
const panoArr = [];
const pointsArr = [];
const footerArr = [];
for (let i = 0; i < 30; i++) {
  panoArr.push(new PANOLENS.ImagePanorama(`asset/Pano ${i + 1}.jpg`));
  pointsArr.push(document.getElementById(i + 1));
  footerArr.push(document.getElementById(`room${i + 1}`));
}
const text = [
  `Въезд в поселок`,
  `Контрольно-пропускной пункт`,
  `Улица Buona (в районе таунхауса 22)`,
  `Патио таунхауса № 22`,
  `Улица Buona (в районе таунхауса 15)`,
  `Патио таунхауса 15`,
  `Патио таунхауса 60`,
  `Вид с террасы (таунхаус 15)`,
  `Улица Buona (в районе таунхауса 6)`,
  `Патио таунхауса 6`,
  `Патио таунхауса 29`,
  `Улица Bella (в районе таунхауса 39)`,
  `Вход в таунхаус 39`,
  `Задний двор таунхауса 39 `,
  `Задний двор таунхауса 40`,
  `Улица Bella (в районе таунхауса 42)`,
  `Задний двор таунхауса 42`,
  `Вид с террасы таунхауса 42`,
  `Улица Bella (в районе таунхауса 43)`,
  `Задний двор таунхауса 43`,
  `Улица Bella (в районе таунхаусов 48,49)`,
  `Вход в таунхаус 48`,
  `Вход в таунхаус 49`,
  `Задний двор таунхауса 49`,
  `Улица Bella (в районе таунхауса 52)`,
  `Вход в таунхаус 52`,
  `Пересечение улиц Bella и Buona, зона бассейнов`,
  `Детская площадка `,
  `Летний кинотеатр`,
  `Ресторан вход с улицы`,
];
let currentAngle = 0;
var lookAtPositions = [
  //0
  new THREE.Vector3(3700, 0, 300),
  //1
  new THREE.Vector3(700, 0, 4100),
  //2
  new THREE.Vector3(-3300, 0, -100),
  //3
  new THREE.Vector3(-3300, 220, -100),
  //4
  new THREE.Vector3(-3300, 220, -100),
  //5
  new THREE.Vector3(-3300, 220, -100),
  //6
  new THREE.Vector3(-3300, 220, -100),
  //7
  new THREE.Vector3(300, -30, -100),
  //8
  new THREE.Vector3(-3300, 220, -100),
  //9
  new THREE.Vector3(-3300, 220, -100),
  //10
  new THREE.Vector3(1300, 0, -100),
  //11
  new THREE.Vector3(2700, 0, 100),
  //12
  new THREE.Vector3(-2700, 0, -1200),
  //13
  new THREE.Vector3(-2000, 0, 100),
  //14
  new THREE.Vector3(-1700, 0, -2100),
  //15
  new THREE.Vector3(100, 0, 3100),
  //16
  new THREE.Vector3(3100, 0, 100),
  //17
  new THREE.Vector3(100, 0, 1000),
  //18
  new THREE.Vector3(100, 0, 1000),
  //19
  new THREE.Vector3(1100, 0, -1000),
  //20
  new THREE.Vector3(100, 0, 1000),
  //21
  new THREE.Vector3(100, 0, 1000),
  //22
  new THREE.Vector3(1100, 0, 1000),
  //23
  new THREE.Vector3(1100, 0, -1000),
  //24
  new THREE.Vector3(1100, 0, -1000),
  //25
  new THREE.Vector3(1100, 0, -1000),
  //26
  new THREE.Vector3(1100, 0, -1000),
  //27
  new THREE.Vector3(1100, 0, -1000),
  //28
  new THREE.Vector3(1100, 0, -1000),
  //29
  new THREE.Vector3(1100, 0, -1000),
];
const rightAngle = (dir, angle) => {
  return panoArr[dir].addEventListener("enter-fade-start", function () {
    currentAngle = angle;
    viewer.tweenControlCenter(lookAtPositions[dir], 0);
  });
};
rightAngle(0, -80);
const addInfospots = (arrow) => {
  var infospot;
  infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Arrow);
  infospot.position.set(arrow.cord[0], arrow.cord[1], arrow.cord[2]);
  infospot.addHoverText(text[arrow.to]);
  
  infospot.addEventListener("click", function () {
    infospot.addHoverText('');
    viewer.setPanorama(panoArr[arrow.to]);
  });
  if(arrow.vision) {
    rightAngle(arrow.pano, arrow.vision)
  }
  panoArr[arrow.pano].add(infospot);
};

const arrows = [
  { pano: 0, to: 1, cord: [3700, 0, 300], vision:-80 },
  { pano: 1, to: 0, cord: [3700, 0, 100], vision:85 },
  { pano: 1, to: 2, cord: [700, 0, 4100]},
  { pano: 1, to: 26, cord: [-1700, 0, 4100]},
  { pano: 2, to: 1, cord: [3700, 0, 100], vision:-160 },
  { pano: 2, to: 3, cord: [-1700, 0, 4100]},
  { pano: 2, to: 4, cord: [-3300, 0, -100]},
  { pano: 3, to: 2, cord: [3700, 0, 100], vision:-90  },
  { pano: 4, to: 2, cord: [3100, 0, 100], vision:-150 },
  { pano: 4, to: 5, cord: [-1700, 0, 3100] },
  { pano: 4, to: 6, cord: [1700, 0, -3100] },
  { pano: 4, to: 8, cord: [-3300, 220, -100] },
  { pano: 5, to: 4, cord: [2700, 0, 2100], vision:-90},
  { pano: 5, to: 7, cord: [3800, 0, 1000]},
  { pano: 6, to: 4, cord: [4700, 0, 100], vision:90 },
  { pano: 7, to: 4, cord: [-1400, 0, 100], vision:90 },
  { pano: 8, to: 4, cord: [3100, 0, 100], vision:-160 },
  { pano: 8, to: 9, cord: [-1700, 0, 4100]},
  { pano: 8, to: 10, cord: [1700, 0, -3100] },
  { pano: 8, to: 11, cord: [-3300, 220, -100] },
  { pano: 9, to: 8, cord: [3300, 0, -100], vision:-90 },
  { pano: 10, to: 8, cord: [3300, 0, -100], vision: 100 },
  { pano: 11, to: 15, cord: [3100, 0, 100], vision:-170 },
  { pano: 11, to: 14, cord: [1700, 0, -3100] },
  { pano: 11, to: 12, cord: [-2700, 0, -2100] },
  { pano: 11, to: 8, cord: [-3300, 220, -100] },
  { pano: 12, to: 11, cord: [-2700, -500, 1100], vision:-75 },
  { pano: 12, to: 13, cord: [2700, 0, 100] },
  { pano: 13, to: 12, cord: [-700, 0, 2100], vision:-125 },
  { pano: 14, to: 11, cord: [-2000, 0, 3100], vision:-125},
  { pano: 15, to: 16, cord: [3100, 0, 100], vision: -75 },
  { pano: 15, to: 11, cord: [-300, 0, -3100] },
  { pano: 15, to: 18, cord: [100, 0, 3100] },
  { pano: 16, to: 15, cord: [-300, 0, -3100], vision: 0 },
  { pano: 16, to: 17, cord: [1300, 0, -3100] },
  { pano: 17, to: 16, cord: [-800, 0, -300], vision: -180 },
  { pano: 18, to: 19, cord: [2100, 0, -300], vision: -90 },
  { pano: 18, to: 15, cord: [-1300, 0, -3400] },
  { pano: 18, to: 20, cord: [700, 0, 3100] },
  { pano: 19, to: 18, cord: [2200, 0, -1100], vision: 5  },
  { pano: 20, to: 21, cord: [2100, 0, -1300], vision: -90 },
  { pano: 20, to: 22, cord: [2100, 0, 300] },
  { pano: 20, to: 18, cord: [-200, 100, -3500] },
  { pano: 20, to: 24, cord: [100, -200, 2500] },
  { pano: 21, to: 20, cord: [3000, -500, -800], vision: -90 },
  { pano: 22, to: 20, cord: [3000, -500, 800] , vision: -90 },
  { pano: 22, to: 23, cord: [-4100, 0, 1300] },
  { pano: 23, to: 22, cord: [-1000, -500, -1800], vision: -15},
  { pano: 24, to: 25, cord: [-3100, 0, 1300] , vision: 90 },
  { pano: 24, to: 26, cord: [800, -400, -2500] },
  { pano: 24, to: 20, cord: [600, -200, 2500]},
  { pano: 25, to: 24, cord: [1800, -500, -1100], vision: 90 },
  { pano: 26, to: 24, cord: [-3100, 0, 1300], vision: 90},
  { pano: 26, to: 28, cord: [800, -400, -2500]  },
  { pano: 26, to: 27, cord: [-800, -400, -2500] },
  { pano: 26, to: 1, cord: [3000, -200, 0]},
  { pano: 27, to: 26, cord: [1800, 0, 2500], vision: 90},
  { pano: 27, to: 28, cord: [3000, -200, 0]  },
  { pano: 28, to: 26, cord: [800, 0, 3500], vision: 90 },
  { pano: 28, to: 29, cord: [3000, -100, -2000]},
  { pano: 29, to: 28, cord: [2000, -100, 100], vision: -70 },
];
arrows.map((el) => {
  return addInfospots(el);
});


const viewer = new PANOLENS.Viewer({
  container: container,
  autoHideInfospot: false,
});
let currentPos = 0;
viewer.OrbitControls.noZoom = true; // Disable scrollwheel zoom
viewer.OrbitControls.maxFov = 50; // Set max zoom
viewer.getControl().rotateSpeed *= 2; // rotation speed
viewer.getControl().momentumScalingFactor *= 0.3; // inertia/spring after drag
let footInfo = document.getElementById("footerContent");
let bottom = document.getElementById("bottomInfo");
let icon = document.getElementById("icon");
let footer = document.getElementById("footer");
let footerI = document.getElementById("footerI");
// let radar = document.getElementById("radar");

///////////////////////////
// const foot1 = document.getElementById('room1')
////////////////
//hall

//guest
const changeTitle = (i) => {
  return (footInfo.innerHTML = text[i]);
};
// const dotCoordinates = [
//   { cx: "361", cy: "361" },
//   { cx: "249", cy: "370" },
//   { cx: "276", cy: "315" },
//   { cx: "323", cy: "330" },
//   { cx: "332", cy: "258" },
//   { cx: "383", cy: "274" },
//   { cx: "273", cy: "236" },
//   { cx: "363", cy: "270" },
//   { cx: "414", cy: "156" },
//   { cx: "465", cy: "175" },
//   { cx: "362", cy: "137" },
//   { cx: "356", cy: "118" },
//   { cx: "360", cy: "81" },
//   { cx: "341", cy: "49" },
//   { cx: "321", cy: "65" },
//   { cx: "331", cy: "145" },
//   { cx: "290", cy: "121" },
//   { cx: "312", cy: "128" },
//   { cx: "308", cy: "167" },
//   { cx: "269", cy: "141" },
//   { cx: "243", cy: "251" },
//   { cx: "235", cy: "226" },
//   { cx: "221", cy: "245" },
//   { cx: "195", cy: "219" },
//   { cx: "197", cy: "298" },
//   { cx: "190", cy: "278" },
//   { cx: "220", cy: "323" },
//   { cx: "180", cy: "353" },
//   { cx: "207", cy: "368" },
//   { cx: "215", cy: "415" },
// ];
panoArr.map((pano, i) => {
  pano.addEventListener("enter", () => {
    changeTitle(i);
    viewer.panorama.rotation.y = 0;
    points.forEach((point) => {
      point.classList.remove("pointH");
    });
    points[i].classList.add("pointH");
    currentPos = i;
    // radar.style.transform = `translateX(${(Number(dotCoordinates[i].cx)/10)-0}px) translateY(${(Number(dotCoordinates[i].cy/10)-0)}px)`
    pointsArr[i].classList.add("opacity");
  });

  pointsArr[i].onclick = () => {
    points.forEach((point) => {
      point.classList.remove("pointH");
    });
    pointsArr[i].classList.add("pointH");
    currentPos = i;
    // radar.style.transform = `translateX(${(Number(dotCoordinates[i].cx)/10)-0}px) translateY(${(Number(dotCoordinates[i].cy/10)-0)}px)`
    pointsArr[i].classList.add("opacity");
    viewer.setPanorama(panoArr[i]);
  };
  viewer.add(panoArr[i]);
  footerArr[i].onclick = () => {
    viewer.setPanorama(panoArr[i]);
    changeTitle(i);
    icon.className = "fas fa-arrow-up";
    bottom.classList.remove("expand");
    footer.classList.remove("new");
  };
  footerArr[i].addEventListener("mouseover", () => {
    // changeTitle(i);
  });
});

viewer.setPanorama(panoArr[0]);

let rotationIcon = document.getElementById("rotate");
let rotate = false;
// rotationIcon.onclick = () => {
//   if (rotate == false) {
//     rotate = true;
//   } else {
//     rotate = false;
//   }
// };
viewer.addUpdateCallback(() => {
  if (rotate) {
    viewer.panorama.rotation.y -= 0.001;
  } else {
  }
});

/////////////////////////////////////// css

footer.onclick = (e) => {
  if (icon.className === "fas fa-arrow-up") {
    bottom.classList.add("expand");
    footer.classList.add("new");
    // footerI.classList.add("new");
    icon.className = "fas fa-arrow-down";
  } else {
    icon.className = "fas fa-arrow-up";
    bottom.classList.remove("expand");
    footer.classList.remove("new");
    // footerI.classList.remove("new");
  }
};

//header

//header, links to another apartment page

let expItems = document.querySelectorAll(".exp_item");

expItems.forEach((item) => {
  //window.location ="./apart2/apart2.html"
  item.addEventListener("click", () => {
    console.log(item.getAttribute("value"));
  });
});

//show plan

let plan = document.getElementById("plan");
let map = document.getElementById("mapContainer");
let compass = document.getElementById("compass");
viewer.OrbitControls.addEventListener("change", () => {
  let angle = Number(viewer.OrbitControls.getAzimuthalAngle().toFixed(1));
  let rotate = angle * (180.0 / Math.PI);
  // compass.style.transition = "100ms ease all"
  compass.style.transform = `rotateZ(${rotate - currentAngle}deg)`;
  // radar.style.transform =  `translateX(${(Number(dotCoordinates[currentPos].cx)/10)}px) translateY(${(Number(dotCoordinates[currentPos].cy))-150}px) rotateZ(${rotate - currentAngle}deg)`;
});
// plan.onclick = (e) => {
//   e.preventDefault()
//   map.classList.toggle("map");
// };

map.onclick = (e) => {
  console.log(e.target);
  if (e.target.id === "mapImg") {
    map.classList.contains("map")
      ? map.classList.remove("map")
      : map.classList.toggle("map");
  } else {
    map.classList.contains("map") &&
      setTimeout(function () {
        map.classList.remove("map");
      }, 500);
  }
};
