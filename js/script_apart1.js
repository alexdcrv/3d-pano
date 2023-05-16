const container = document.querySelector("#container");
const points = document.querySelectorAll(".point");
const panoArr = [];
const pointsArr = [];
const footerArr = [];
for (let i = 0; i < 30; i++) {
  panoArr.push(new PANOLENS.ImagePanorama(`asset/Pano ${i + 1}.jpg`));
  pointsArr.push(document.getElementById(i + 1));
  footerArr.push(document.getElementById(`room${i+1}`))
}

panoArr[0].link(panoArr[1], new THREE.Vector3(3700, 0, 300));
panoArr[1].link(panoArr[0], new THREE.Vector3(3700, 0, 100));
panoArr[1].link(panoArr[2], new THREE.Vector3(700, 0, 4100));
panoArr[1].link(panoArr[26], new THREE.Vector3(-1700, 0, 4100));


panoArr[2].link(panoArr[1], new THREE.Vector3(3700, 0, 100));
panoArr[2].link(panoArr[3], new THREE.Vector3(-1700, 0, 4100));
panoArr[2].link(panoArr[4], new THREE.Vector3(-3300, 0, -100));

panoArr[3].link(panoArr[2], new THREE.Vector3(3700, 0, 100));

panoArr[4].link(panoArr[2], new THREE.Vector3(3100, 0, 100));
panoArr[4].link(panoArr[7], new THREE.Vector3(-1700, 0, 4100));
panoArr[4].link(panoArr[5], new THREE.Vector3(-1700, 0, 3100));
panoArr[4].link(panoArr[6], new THREE.Vector3(1700, 0, -3100));
panoArr[4].link(panoArr[8], new THREE.Vector3(-3300,220, -100));
panoArr[5].link(panoArr[4], new THREE.Vector3(4700, 0, 100));
panoArr[6].link(panoArr[4], new THREE.Vector3(4700, 0, 100));

panoArr[7].link(panoArr[4], new THREE.Vector3(-1400, 0, 100));

panoArr[8].link(panoArr[4], new THREE.Vector3(3100, 0, 100));
panoArr[8].link(panoArr[9], new THREE.Vector3(-1700, 0, 4100));
panoArr[8].link(panoArr[10], new THREE.Vector3(1700, 0, -3100));
panoArr[8].link(panoArr[11], new THREE.Vector3(-3300,220, -100));

panoArr[9].link(panoArr[8], new THREE.Vector3(3300, 0, -100));

panoArr[10].link(panoArr[8], new THREE.Vector3(3300, 0, -100));

panoArr[11].link(panoArr[15], new THREE.Vector3(3100, 0, 100));
panoArr[11].link(panoArr[14], new THREE.Vector3(1700, 0, -3100));
panoArr[11].link(panoArr[12], new THREE.Vector3(-2700, 0, -2100));
panoArr[11].link(panoArr[8], new THREE.Vector3(-3300,220, -100));

panoArr[12].link(panoArr[11], new THREE.Vector3(-2700, -500, 1100));
panoArr[12].link(panoArr[13], new THREE.Vector3(2700, 0, 100));

panoArr[13].link(panoArr[12], new THREE.Vector3(-700, 0, 2100));

panoArr[14].link(panoArr[11], new THREE.Vector3(-2000, 0, 3100));


panoArr[15].link(panoArr[16], new THREE.Vector3(3100, 0, 100));
panoArr[15].link(panoArr[11], new THREE.Vector3(-300, 0, -3100));
panoArr[15].link(panoArr[18], new THREE.Vector3(100, 0, 3100));

panoArr[16].link(panoArr[15], new THREE.Vector3(-300, 0, -3100));
panoArr[16].link(panoArr[17], new THREE.Vector3(1300, 0, -3100));

panoArr[17].link(panoArr[16], new THREE.Vector3(-800, 0, -300));

panoArr[18].link(panoArr[19], new THREE.Vector3(2100, 0, -300));
panoArr[18].link(panoArr[15], new THREE.Vector3(-1300, 0, -3400));
panoArr[18].link(panoArr[20], new THREE.Vector3(700, 0, 3100));

panoArr[19].link(panoArr[18], new THREE.Vector3(2200, 0, -1100));

panoArr[20].link(panoArr[21], new THREE.Vector3(2100, 0, -1300));
panoArr[20].link(panoArr[22], new THREE.Vector3(2100, 0, 300));
panoArr[20].link(panoArr[18], new THREE.Vector3(-200, 100, -3500));
panoArr[20].link(panoArr[24], new THREE.Vector3(100, -200, 2500));

panoArr[21].link(panoArr[20], new THREE.Vector3(3000, -500, -800));

panoArr[22].link(panoArr[20], new THREE.Vector3(3000, -500, 800));
panoArr[22].link(panoArr[23], new THREE.Vector3(-4100, 0, 1300));

panoArr[23].link(panoArr[22], new THREE.Vector3(-1000, -500, -1800));


panoArr[24].link(panoArr[25], new THREE.Vector3(-3100, 0, 1300));
panoArr[24].link(panoArr[26], new THREE.Vector3(800, -400, -2500));
panoArr[24].link(panoArr[20], new THREE.Vector3(600, -200, 2500));

panoArr[25].link(panoArr[24], new THREE.Vector3(1800, -500, -1100));

panoArr[26].link(panoArr[24], new THREE.Vector3(-3100, 0, 1300));
panoArr[26].link(panoArr[28], new THREE.Vector3(800, -400, -2500))
panoArr[26].link(panoArr[27], new THREE.Vector3(-800, -400, -2500));
panoArr[26].link(panoArr[1], new THREE.Vector3(3000, -200, 0));

panoArr[27].link(panoArr[26], new THREE.Vector3(1800, 0, 2500));
panoArr[27].link(panoArr[28], new THREE.Vector3(3000, -200, 0));

panoArr[28].link(panoArr[26], new THREE.Vector3(800, 0, 3500));;
panoArr[28].link(panoArr[29], new THREE.Vector3(3000, -100, -2000));

panoArr[29].link(panoArr[28], new THREE.Vector3(2000, -100, 0));
const viewer = new PANOLENS.Viewer({
  container: container,
  autoHideInfospot: false,
});

viewer.OrbitControls.noZoom = true; // Disable scrollwheel zoom
viewer.OrbitControls.maxFov = 50; // Set max zoom
viewer.getControl().rotateSpeed *= 2; // rotation speed
viewer.getControl().momentumScalingFactor *= 0.3; // inertia/spring after drag
let footInfo = document.getElementById("footerContent")


///////////////////////////
// const foot1 = document.getElementById('room1')
////////////////
//hall


//guest


panoArr.map((pano, i) => {
  pano.addEventListener("enter", () => {
    footInfo.innerHTML = `Pano ${i + 1}`;
    viewer.panorama.rotation.y = 0;
    points.forEach((point) => {
      point.classList.remove("pointH");
    });
    points[i].classList.add("pointH");
  });

  pointsArr[i].onclick = () => {
    points.forEach((point) => {
      point.classList.remove("pointH");
    });
    pointsArr[i].classList.add("pointH");
    viewer.setPanorama(panoArr[i]);
  };
  viewer.add(panoArr[i]);
  footerArr[i].onclick = () => { 
    viewer.setPanorama(panoArr[i])
    footInfo.innerHTML = "Pano" + (i +1)
  }
  footerArr[i].addEventListener('mouseover', () => {
    footInfo.innerHTML = "Pano" + (i +1)
  })

});

viewer.setPanorama(panoArr[0]);

let rotationIcon = document.getElementById("rotate");
let rotate = false;
rotationIcon.onclick = () => {
  if (rotate == false) {
    rotate = true;
  } else {
    rotate = false;
  }
};
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
    footerI.classList.add("new");
    icon.className = "fas fa-arrow-down";
  } else {
    icon.className = "fas fa-arrow-up";
    bottom.classList.remove("expand");
    footer.classList.remove("new");
    footerI.classList.remove("new");
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
let map = document.getElementById("map2");

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
