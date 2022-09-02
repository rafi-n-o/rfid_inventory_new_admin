import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../redux/action/convertToBase64";
import { storeDevice } from "../../redux/action/device";

const Create = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [validation, setValidation] = useState();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const navigate = useNavigate();

  const formDevice = (e) => {
    e.preventDefault();

    const form = {
      type,
      name,
      image,
      price,
    };

    storeDevice(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/devices");
      })
      .catch((err) => {
        if (err.message === "validation failed") {
          toast.error(err.message);
          setValidation(err.data);
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Device</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Create</a>
                </li>
                <li className="breadcrumb-item active">Device</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <button
              type="button"
              className="btn btn-tool"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fas fa-plus"></i>
            </button>

            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus"></i>
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={formDevice}>
              <div class="form-group">
                <label>Tipe</label>
                <select
                  class="form-control"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Pilih Tipe</option>
                  <option value="handheld">Handheld</option>
                  <option value="antenna">Antena</option>
                  <option value="tag">Tag</option>
                </select>
                <small class="form-text text-danger">{validation?.type}</small>
              </div>
              <div class="form-group">
                <label>Nama</label>
                <input
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.name}</small>
              </div>
              <div class="form-group">
                <label>Price</label>
                <input
                  class="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.price}</small>
              </div>
              <div class="form-group">
                <label>Image</label>
                <input
                  type="file"
                  class="form-control-file"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
                />
                <small class="form-text text-danger">{validation?.image}</small>
              </div>
              <button type="submit" class="btn btn-primary">
                Simpan
              </button>
            </form>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </section>
    </>
  );
};

export default Create;
