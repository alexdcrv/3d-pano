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
panoArr[0].link(panoArr[1], new THREE.Vector3(3700, 0, 300));

rightAngle(1, 85);
panoArr[1].link(panoArr[0], new THREE.Vector3(3700, 0, 100));
panoArr[1].link(panoArr[2], new THREE.Vector3(700, 0, 4100));
panoArr[1].link(panoArr[26], new THREE.Vector3(-1700, 0, 4100));

rightAngle(2, -160);
panoArr[2].link(panoArr[1], new THREE.Vector3(3700, 0, 100));
panoArr[2].link(panoArr[3], new THREE.Vector3(-1700, 0, 4100));
panoArr[2].link(panoArr[4], new THREE.Vector3(-3300, 0, -100));

rightAngle(3, -90);
panoArr[3].link(panoArr[2], new THREE.Vector3(3700, 0, 100));

rightAngle(4, -150);
panoArr[4].link(panoArr[2], new THREE.Vector3(3100, 0, 100));
// panoArr[4].link(panoArr[7], new THREE.Vector3(-1700, 0, 4100));
panoArr[4].link(panoArr[5], new THREE.Vector3(-1700, 0, 3100));
panoArr[4].link(panoArr[6], new THREE.Vector3(1700, 0, -3100));
panoArr[4].link(panoArr[8], new THREE.Vector3(-3300, 220, -100));

rightAngle(5, -90);
panoArr[5].link(panoArr[4], new THREE.Vector3(4700, 0, 100));

rightAngle(6, 90);
panoArr[6].link(panoArr[4], new THREE.Vector3(4700, 0, 100));

rightAngle(7, 90);
panoArr[7].link(panoArr[4], new THREE.Vector3(-1400, 0, 100));

rightAngle(8, -160);
panoArr[8].link(panoArr[4], new THREE.Vector3(3100, 0, 100));
panoArr[8].link(panoArr[9], new THREE.Vector3(-1700, 0, 4100));
panoArr[8].link(panoArr[10], new THREE.Vector3(1700, 0, -3100));
panoArr[8].link(panoArr[11], new THREE.Vector3(-3300, 220, -100));

rightAngle(9, -90);
panoArr[9].link(panoArr[8], new THREE.Vector3(3300, 0, -100));
rightAngle(10, 100);
panoArr[10].link(panoArr[8], new THREE.Vector3(3300, 0, -100));

rightAngle(11, -170);
panoArr[11].link(panoArr[15], new THREE.Vector3(3100, 0, 100));
panoArr[11].link(panoArr[14], new THREE.Vector3(1700, 0, -3100));
panoArr[11].link(panoArr[12], new THREE.Vector3(-2700, 0, -2100));
panoArr[11].link(panoArr[8], new THREE.Vector3(-3300, 220, -100));

rightAngle(12, -75);
panoArr[12].link(panoArr[11], new THREE.Vector3(-2700, -500, 1100));
panoArr[12].link(panoArr[13], new THREE.Vector3(2700, 0, 100));

rightAngle(13, -125);
panoArr[13].link(panoArr[12], new THREE.Vector3(-700, 0, 2100));

rightAngle(14, -125);
panoArr[14].link(panoArr[11], new THREE.Vector3(-2000, 0, 3100));

rightAngle(15, -75);
panoArr[15].link(panoArr[16], new THREE.Vector3(3100, 0, 100));
panoArr[15].link(panoArr[11], new THREE.Vector3(-300, 0, -3100));
panoArr[15].link(panoArr[18], new THREE.Vector3(100, 0, 3100));

rightAngle(16, 0);
panoArr[16].link(panoArr[15], new THREE.Vector3(-300, 0, -3100));
panoArr[16].link(panoArr[17], new THREE.Vector3(1300, 0, -3100));

rightAngle(17, -180);
panoArr[17].link(panoArr[16], new THREE.Vector3(-800, 0, -300));

rightAngle(18, -90);
panoArr[18].link(panoArr[19], new THREE.Vector3(2100, 0, -300));
panoArr[18].link(panoArr[15], new THREE.Vector3(-1300, 0, -3400));
panoArr[18].link(panoArr[20], new THREE.Vector3(700, 0, 3100));

rightAngle(19, 5);
panoArr[19].link(panoArr[18], new THREE.Vector3(2200, 0, -1100));

rightAngle(20, -90);
panoArr[20].link(panoArr[21], new THREE.Vector3(2100, 0, -1300));
panoArr[20].link(panoArr[22], new THREE.Vector3(2100, 0, 300));
panoArr[20].link(panoArr[18], new THREE.Vector3(-200, 100, -3500));
panoArr[20].link(panoArr[24], new THREE.Vector3(100, -200, 2500));

rightAngle(21, -90);
panoArr[21].link(panoArr[20], new THREE.Vector3(3000, -500, -800));

rightAngle(22, 90);
panoArr[22].link(panoArr[20], new THREE.Vector3(3000, -500, 800));
panoArr[22].link(panoArr[23], new THREE.Vector3(-4100, 0, 1300));

rightAngle(23, -15);
panoArr[23].link(panoArr[22], new THREE.Vector3(-1000, -500, -1800));

rightAngle(24, 90);
panoArr[24].link(panoArr[25], new THREE.Vector3(-3100, 0, 1300));
panoArr[24].link(panoArr[26], new THREE.Vector3(800, -400, -2500));
panoArr[24].link(panoArr[20], new THREE.Vector3(600, -200, 2500));

rightAngle(25, 90);
panoArr[25].link(panoArr[24], new THREE.Vector3(1800, -500, -1100));

rightAngle(26, 90);
panoArr[26].link(panoArr[24], new THREE.Vector3(-3100, 0, 1300));
panoArr[26].link(panoArr[28], new THREE.Vector3(800, -400, -2500));
panoArr[26].link(panoArr[27], new THREE.Vector3(-800, -400, -2500));
panoArr[26].link(panoArr[1], new THREE.Vector3(3000, -200, 0));

rightAngle(27, 90);
panoArr[27].link(panoArr[26], new THREE.Vector3(1800, 0, 2500));
panoArr[27].link(panoArr[28], new THREE.Vector3(3000, -200, 0));

rightAngle(28, 90);
panoArr[28].link(panoArr[26], new THREE.Vector3(800, 0, 3500));
panoArr[28].link(panoArr[29], new THREE.Vector3(3000, -100, -2000));

rightAngle(29, -70);
panoArr[29].link(panoArr[28], new THREE.Vector3(2000, -100, 0));
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
// let radar = document.getElementById("radar");

///////////////////////////
// const foot1 = document.getElementById('room1')
////////////////
//hall

//guest
const changeTitle = (i) => {
  switch (i) {
    case 0:
      footInfo.innerHTML = `Въезд в поселок`;
      break;
    case 1:
      footInfo.innerHTML = `Контрольно-пропускной пункт`;
      break;
    case 2:
      footInfo.innerHTML = `Улица Buona (в районе таунхауса 22)`;
      break;
    case 3:
      footInfo.innerHTML = `Патио таунхауса № 22`;
      break;
    case 4:
      footInfo.innerHTML = `Улица Buona (в районе таунхауса 15)`;
      break;
    case 5:
      footInfo.innerHTML = `Патио таунхауса 15`;
      break;
    case 6:
      footInfo.innerHTML = `Патио таунхауса 60`;
      break;
    case 7:
      footInfo.innerHTML = `Вид с террасы (таунхаус 15)`;
      break;
    case 8:
      footInfo.innerHTML = `Улица Buona (в районе таунхауса 6)`;
      break;
    case 9:
      footInfo.innerHTML = `Патио таунхауса 6`;
      break;
    case 10:
      footInfo.innerHTML = `Патио таунхауса 29`;
      break;
    case 11:
      footInfo.innerHTML = `Улица Bella (в районе таунхауса 39)`;
      break;
    case 12:
      footInfo.innerHTML = `Вход в таунхаус 39`;
      break;
    case 13:
      footInfo.innerHTML = `Задний двор таунхауса 39 `;
      break;
    case 14:
      footInfo.innerHTML = `Задний двор таунхауса 40`;
      break;
    case 15:
      footInfo.innerHTML = `Улица Bella (в районе таунхауса 42)`;
      break;
    case 16:
      footInfo.innerHTML = `Задний двор таунхауса 42`;
      break;
    case 17:
      footInfo.innerHTML = `Вид с террасы таунхауса 42`;
      break;
    case 18:
      footInfo.innerHTML = `Улица Bella (в районе таунхауса 43)`;
      break;
    case 19:
      footInfo.innerHTML = `Задний двор таунхауса 43`;
      break;
    case 20:
      footInfo.innerHTML = `Улица Bella (в районе таунхаусов 48,49)`;
      break;
    case 21:
      footInfo.innerHTML = `Вход в таунхаус 48`;
      break;
    case 22:
      footInfo.innerHTML = `Вход в таунхаус 49`;
      break;
    case 23:
      footInfo.innerHTML = `Задний двор таунхауса 49`;
      break;
    case 24:
      footInfo.innerHTML = `Улица Bella (в районе таунхауса 52)`;
      break;
    case 25:
      footInfo.innerHTML = `Вход в таунхаус 52`;
      break;
    case 26:
      footInfo.innerHTML = `Пересечение улиц Bella и Buona, зона бассейнов`;
      break;
    case 27:
      footInfo.innerHTML = `Детская площадка `;
      break;
    case 28:
      footInfo.innerHTML = `Летний кинотеатр`;
      break;
    case 29:
      footInfo.innerHTML = `Ресторан вход с улицы`;
      break;
  }
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
  };
  footerArr[i].addEventListener("mouseover", () => {
    changeTitle(i);
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
let bottom = document.getElementById("bottomInfo");
let icon = document.getElementById("icon");
let footer = document.getElementById("footer");
let footerI = document.getElementById("footerI");

footer.addEventListener("click", () => {
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
});

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
plan.onclick = () => {
  map.classList.toggle("map");
};

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
