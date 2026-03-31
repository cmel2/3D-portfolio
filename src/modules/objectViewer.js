(function registerObjectViewer() {
  const createStatus = (mount, text) => {
    mount.innerHTML = `<div class="obj-viewer__status">${text}</div>`;
  };

  const fitCameraToObject = (camera, controls, object) => {
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;

    object.position.sub(center);

    camera.near = 0.1;
    camera.far = maxDim * 30;
    camera.position.set(maxDim * 2.25, maxDim * 1.35, maxDim * 2.45);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    controls.target.set(0, maxDim * 0.12, 0);
    controls.minDistance = maxDim * 0.9;
    controls.maxDistance = maxDim * 10;
    controls.update();
  };

  const initViewer = (root) => {
    const mount = root.querySelector(".obj-viewer__canvas");

    if (!mount || mount.dataset.ready === "true") {
      return;
    }

    mount.dataset.ready = "true";

    if (!window.THREE || !THREE.OBJLoader || !THREE.OrbitControls) {
      createStatus(mount, "Viewer-Bibliotheken konnten nicht geladen werden.");
      return;
    }

    const objKey = root.dataset.objKey;
    const objText = window.PortfolioModels && window.PortfolioModels[objKey];

    if (!objText) {
      createStatus(mount, "Modell-Daten konnten nicht geladen werden.");
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    const loader = new THREE.OBJLoader();
    const material = new THREE.MeshStandardMaterial({
      color: 0xcab299,
      metalness: 0.1,
      roughness: 0.72,
      side: THREE.DoubleSide,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(renderer.domElement);

    controls.enableDamping = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    scene.add(new THREE.AmbientLight(0xffffff, 1.05));

    const keyLight = new THREE.DirectionalLight(0xfff4e7, 1.45);
    keyLight.position.set(18, 24, 16);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xa7bbd0, 0.65);
    fillLight.position.set(-14, 10, -18);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffd8b2, 0.55);
    rimLight.position.set(0, -14, 20);
    scene.add(rimLight);

    const object = loader.parse(objText);
    object.traverse((child) => {
      if (child.isMesh) {
        if (child.geometry && child.geometry.computeVertexNormals) {
          child.geometry.computeVertexNormals();
        }
        child.material = material;
      }
    });
    object.rotation.x = -0.12;
    object.rotation.y = Math.PI * 0.22;
    scene.add(object);
    fitCameraToObject(camera, controls, object);

    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 320;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      root.__viewerFrame = window.requestAnimationFrame(render);
    };

    render();

    root.__viewerCleanup = () => {
      window.cancelAnimationFrame(root.__viewerFrame);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
    };
  };

  window.setupObjectViewers = () => {
    document.querySelectorAll("[data-obj-viewer]").forEach(initViewer);
  };
})();
