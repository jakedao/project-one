// BabylonScene.tsx
import use3D from "@/hooks/use3D";
import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  MeshBuilder,
  PointerEventTypes,
  Scene,
  Vector3,
} from "@babylonjs/core";
import * as earcut from "earcut";
import React, { useEffect, useRef, useState } from "react";

interface BabylonSceneProps {
  textSample?: string;
}

const BabylonScene: React.FC<BabylonSceneProps> = (props) => {
  const { textSample = "" } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [font, setFontData] = useState();
  const { scene: currentScene, initScene, selectMesh } = use3D();

  const getFonts = async () => {
    const fontData = await (
      await fetch("/statics/Open Sans_Regular.json")
    ).json(); // Providing you have a font data file at that location

    setFontData(fontData);
  };

  // Scene initiallization
  useEffect(() => {
    if (!canvasRef.current) return;

    getFonts();
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    // Create a camera
    const camera = new ArcRotateCamera(
      "camera",
      0,
      Math.PI / 2,
      10,
      new Vector3(0, 0, 0),
      scene
    );

    // Set the alpha, beta, and radius
    camera.alpha = -Math.PI / 2;
    camera.beta = Math.PI / 2;
    camera.radius = 20; // Distance from the target

    // This attaches the camera to the canvas
    camera.attachControl(scene, true);

    // Create a light
    const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

    light.intensity = 1;

    // Create a ground
    MeshBuilder.CreateGround("ground1", { width: 6, height: 10 }, scene);

    engine.runRenderLoop(() => {
      scene.render();
    });

    const resize = () => {
      engine.resize();
    };
    initScene(scene);

    scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
        case PointerEventTypes.POINTERDOWN:
          if (pointerInfo.pickInfo?.hit) {
            // Check if a mesh was picked
            const pickedMesh = pointerInfo.pickInfo.pickedMesh;
            pickedMesh && selectMesh(pickedMesh);
            console.log(" DEBUGGING MESH - Clicked on:", pickedMesh?.name);
            // Your custom logic for the clicked mesh
          }
          break;
        // You can also handle POINTERUP, POINTERMOVE, etc.
      }
    });

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      engine.dispose();
    };
  }, []);

  useEffect(() => {
    currentScene?.getMeshByName("myText")?.dispose();
    if (font && currentScene && textSample) {
      const text = MeshBuilder.CreateText(
        "myText",
        textSample,
        font,
        {
          size: 1,
          resolution: 16,
        },
        currentScene,
        earcut.default
      );

      text!.position.x = 5;
      text!.position.y = 5;
    }
  }, [font, currentScene, textSample]);

  return (
    <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }}></canvas>
  );
};

export default BabylonScene;
