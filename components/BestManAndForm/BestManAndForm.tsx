'use client'
import React, { useState } from "react";
import ShowAnimated from "../ShowAniamted/ShowAnimated";
import { Form } from "../Form/Form";

const BestManAndForm = () => {
  const [hideImage, setHideImage] = useState(false)
  return (
    <div>
      {!hideImage && <ShowAnimated title="Кумове" image="/kumove.png" names="Ани и Валентин" />}

      <Form setHideImage={setHideImage}/>
    </div>
  );
};

export default BestManAndForm;
