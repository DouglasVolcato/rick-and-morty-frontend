import { useState } from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import { Api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import Button from "../button/Button";
import Fieldset from "../fieldset/Fieldset";

export function Create(props) {
  const [previewImage, setPreviewImage] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const imageUrl = event.target.imageUrl.value;

    const dados = {
      user: "",
      name: nome,
      imageUrl: imageUrl,
    };

    const resultado = await Api.buildApiPostAuthRequest(
      Api.createCharacterUrl(),
      dados
    );

    const jsonResultado = await resultado.json();

    navigate(`/viewOne/${jsonResultado.character._id}`);
  };

  const updatePreview = (event) => {
    setPreviewImage(event.target.value);
  };

  return (
    <section className="page">
      <div className="create">
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <Input name={"nome"} description={"Nome:"} />
            <Input
              name={"imageUrl"}
              description={"URL da Imagem:"}
              onChange={updatePreview}
            />
            {previewImage ? (
              <div>
                <span className="form__label">Prévia da imagem:</span>
                <br />
                <img
                  src={previewImage}
                  className="preview-image"
                  alt="Prévia da Imagem"
                />
              </div>
            ) : (
              ""
            )}
            <br />
          </Fieldset>
          <Button description={"Adicionar"} />
        </Form>
      </div>
    </section>
  );
}
