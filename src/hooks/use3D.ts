import type { Custom3DHook, TNavigator } from "@/types/demo";
import {
  Axis,
  MeshBuilder,
  Space,
  StandardMaterial,
  Texture,
  Tools,
} from "@babylonjs/core";
import { create } from "zustand";

const use3D = create<Custom3DHook>((set, get) => ({
  scene: undefined,
  selectedMesh: undefined,
  initScene: (arg) => {
    set({ scene: arg });
  },
  selectMesh: (arg) => {
    set({ selectedMesh: arg });
  },
  addBox: (size: number) => {
    const newScene = get().scene;
    let count = 0;
    if (newScene) {
      const lastItem = [...newScene.meshes].pop();
      for (const mesh of newScene.meshes) {
        mesh.name.includes("box");
        count++;
      }

      const box = MeshBuilder.CreateBox(`box_${count + 1}`, { size }, newScene);
      const boxMaterial = new StandardMaterial("box");
      boxMaterial.diffuseTexture = new Texture("/images/water.png");
      box.material = boxMaterial;

      // Adding another new box with different position
      box.position.x = (lastItem?.position._x || 0) + size;
      box.position.y = 3.5;
    }
    set({ scene: newScene });
  },
  addSphere: (size) => {
    const newScene = get().scene;
    if (newScene) {
      const lastItem = [...newScene.meshes].pop();

      const sphere = MeshBuilder.CreateSphere(
        "sphere",
        { diameter: size, segments: 64 },
        newScene
      );

      const sphereMaterial = new StandardMaterial("sphere");
      sphereMaterial.diffuseTexture = new Texture("/images/fire.png");
      sphere.material = sphereMaterial;

      // Adding another new box with different position
      sphere.position.x = (lastItem?.position._x || 0) + size;
      sphere.position.y = 1;
    }
    set({ scene: newScene });
  },
  rotateMesh: (deg: number, meshId: string) => {
    const newScene = get().scene;

    if (newScene) {
      const newMeshes = newScene.meshes.map((mesh) => {
        if (mesh.id === meshId) {
          console.log("checking deg", deg);
          mesh.rotate(Axis.Y, Tools.ToRadians(deg), Space.LOCAL);
        }
        return mesh;
      });

      newScene.meshes = newMeshes;
    }

    set({ scene: newScene });
  },
  onNavigate: (direction: TNavigator, meshId: string) => {
    const newScene = get().scene;
    const SPACING = 0.5;

    if (newScene) {
      const newMeshes = newScene.meshes.map((mesh) => {
        if (mesh.id === meshId) {
          switch (direction) {
            case "left":
              mesh.position.x = mesh.position.x - SPACING;
              break;
            case "right":
              mesh.position.x = mesh.position.x + SPACING;
              break;
            case "up":
              mesh.position.y = mesh.position.y + SPACING;
              break;
            default:
              mesh.position.y = mesh.position.y - SPACING;
          }
        }
        return mesh;
      });

      newScene.meshes = newMeshes;
    }

    set({ scene: newScene });
  },
}));

export default use3D;
