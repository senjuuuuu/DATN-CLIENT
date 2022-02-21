import React, { useEffect, useRef, useState } from 'react';
import * as SC from './NewPinForm.elements';
import { MdAdd } from 'react-icons/md';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { TableDropdown } from 'features/main/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as mobileNet from '@tensorflow-models/mobilenet';

const schema = yup.object({}).required();
type Inputs = {
  fileUpload: any;
};
export function NewPinForm() {
  const [showLabel, setShowLabel] = useState<Boolean>(true);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState<any>(null);
  const [imageURL, setImageURL] = useState<any>(null);
  const [results, setResults] = useState<any>([]);

  const imageRef = useRef<HTMLImageElement>(null);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  /** */
  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobileNet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };
  const uploadImage = async (e: any) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
      setShowLabel(false);
    } else {
      setImageURL(null);
    }
    // upload_img(e, setImageURL, setShowLabel);
  };
  const identify = async () => {
    // textInputRef.current.value = ''
    const data = await model.classify(imageRef.current);
    setResults(data);
    console.log(results);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (imageURL !== null) {
      identify();
    }
    console.log(data);
  };
  useEffect(() => {
    loadModel();
  }, []);
  if (isModelLoading) {
    return <h2>Model Loading...</h2>;
  }
  return (
    <SC.Form action="" onSubmit={handleSubmit(onSubmit)}>
      <SC.LeftSide>
        <SC.Section1>
          <SC.Icon>
            <MdAdd />
          </SC.Icon>
        </SC.Section1>
        <SC.Section2>
          <SC.Label htmlFor="file_input" status={showLabel}>
            <input type="file" accept="image/*" id="file_input" {...register('fileUpload')} onChange={uploadImage} />
            <BsFillArrowUpCircleFill fontSize="3rem" />
            <span>Drag and drop or click to upload</span>
          </SC.Label>
          <SC.PinImg status={showLabel}>
            {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
            <SC.Icon onClick={() => setShowLabel(true)}>
              <FaTrashAlt fontSize="1.25rem" />
            </SC.Icon>
          </SC.PinImg>
        </SC.Section2>
        <SC.Section3>
          <SC.Button type="submit">Save pin</SC.Button>
        </SC.Section3>
      </SC.LeftSide>
      <SC.RightSide>
        <SC.Section1>
          <SC.SelectGroup>
            <TableDropdown />
            <SC.ButtonSelect>Save</SC.ButtonSelect>
          </SC.SelectGroup>
        </SC.Section1>
        <SC.InputContainer>
          <label htmlFor="0">
            Title:
            <SC.Textarea id="0" name="" placeholder="Add your title"></SC.Textarea>
          </label>
          <label htmlFor="1">
            Description:
            <SC.FormControl>
              <SC.Input id="1" type="text" placeholder="Add your description" />
            </SC.FormControl>
          </label>
          <label htmlFor="url">
            URL:
            <SC.FormControl>
              <SC.Input id="url" type="text" placeholder="Add your URL" />
            </SC.FormControl>
          </label>
        </SC.InputContainer>
      </SC.RightSide>
    </SC.Form>
  );
}
