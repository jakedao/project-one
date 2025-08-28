import type { AbstractMesh, Scene } from "@babylonjs/core";

export type TShape = "box" | "sphere";

export interface DemoForm {
  name: string;
  size: number;
  shape: TShape;
}

export interface Custom3DHook {
  scene?: Scene;
  selectedMesh?: AbstractMesh;
  initScene: (arg: Scene) => void;
  addBox: (size: number) => void;
  addSphere: (size: number) => void;
  selectMesh: (obj: AbstractMesh) => void;
  rotateMesh: (deg: number, meshId: string) => void;
  onNavigate: (direction: TNavigator, meshId: string) => void;
}

export type TNavigator = "left" | "right" | "up" | "down";
