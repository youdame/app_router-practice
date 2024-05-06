"use client";
import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const fileInputRef = useRef();
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleChangePickedImage = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
    }

    const fileReader = new FileReader(file);

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={fileInputRef}
          // value={pickedImage}
          onChange={handleChangePickedImage}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
