import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Button, Slider, Text } from "@/components/common";
import { BabylonScene, Controller, Form } from "@/components/DemoComponents";
import use3D from "@/hooks/use3D";
import { schema } from "@/schemes";
import type { DemoForm, TNavigator } from "@/types/demo";

import "./DemoPage.scss";

const DEFAULT_VALUES: DemoForm = {
  name: "",
  size: 0,
};

const DemoPage = () => {
  const [data, setData] = useState<DemoForm>();
  const { addBox, addSphere, selectedMesh, rotateMesh, onNavigate } = use3D();
  const [rotation, setRotation] = useState<number>(0);

  const formInstance = useForm<DemoForm>({
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });
  const { handleSubmit, reset } = formInstance;

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

  const onReset = () => {
    reset(DEFAULT_VALUES);
  };

  return (
    <FormProvider {...formInstance}>
      <div className="demo__page">
        <div className="demo__page__section">
          <Form />
          <div className="form__actions">
            <Button
              variant="secondary"
              width={180}
              height={40}
              onClick={() => {
                onReset();
              }}
            >
              <Text size="title" align="center">
                Reset
              </Text>
            </Button>
            <Button
              width={180}
              height={40}
              onClick={handleSubmit(onSubmitForm)}
            >
              <Text size="title" align="center">
                Confirm
              </Text>
            </Button>
          </div>
        </div>
        <div className="demo__page__3d">
          <Text variant="h5" align="center" width="100%">
            BabylonJS
          </Text>
          <BabylonScene textSample={data?.name} />
          <div className="demo__page__3d__toolbar">
            <div className="demo__page__3d__toolbar__item">
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
            </div>
            <div className="demo__page__3d__toolbar__item">
              <Text size="title">Navigation</Text>
              <Controller handler={handleNavigator} />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default DemoPage;
