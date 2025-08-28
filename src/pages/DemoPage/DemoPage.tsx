import { Button, Slider, Text } from "@/components/common";
import use3D from "@/hooks/use3D";
import { schema } from "@/schemes";
import type { DemoForm, TNavigator } from "@/types/demo";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Controller from "./Controller";
import "./DemoPage.scss";
import Form from "./Form";
import BabylonScene from "./SceneComponent";

const DemoPage = () => {
  const [data, setData] = useState<DemoForm>();
  const { addBox, addSphere, selectedMesh, rotateMesh, onNavigate } = use3D();
  const [rotation, setRotation] = useState<number>(0);

  const formInstance = useForm<DemoForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      shape: "box",
      size: 0,
    },
  });
  const { handleSubmit } = formInstance;

  const onSubmitForm = (formValues: DemoForm) => {
    setData(formValues);

    if (formValues.shape === "box") {
      addBox(formValues.size / 10);
    } else {
      addSphere(formValues.size / 10);
    }
  };

  const handleNavigator = (arg: TNavigator) => {
    if (selectedMesh) {
      onNavigate(arg, selectedMesh?.id);
    }
  };

  return (
    <FormProvider {...formInstance}>
      <div className="demo__page">
        <div className="demo__page__section">
          <Form />
          <Button width={250} onClick={handleSubmit(onSubmitForm)}>
            <Text size="title" align="center">
              Insert
            </Text>
          </Button>
        </div>
        <div className="demo__page__3d">
          <BabylonScene textSample={data?.name} />
          <div className="demo__page__3d__toolbar">
            <Text size="title">Rotation</Text>
            <Slider
              value={rotation}
              min={0}
              max={360}
              step={1}
              onChange={(e) => {
                setRotation(e);
                if (selectedMesh) {
                  rotateMesh(e, selectedMesh.id);
                }
              }}
            />
            <Controller handler={handleNavigator} />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default DemoPage;
