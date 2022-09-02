import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getService, updateService } from "../../redux/action/service";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService(id));
  }, [id]);

  const { service } = useSelector((state) => state.service);

  const [category = service?.category, setCategory] = useState();
  const [month = service?.month, setMonth] = useState();
  const [price = service?.price, setPrice] = useState();
  const [discount = service?.discount, setDiscount] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const formService = (e) => {
    e.preventDefault();

    const form = {
      category,
      month,
      price,
      discount,
    };

    updateService(id, form)
      .then((res) => {
        toast.success(res.message);
        navigate("/services");
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
              <h1>Service</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Update</a>
                </li>
                <li className="breadcrumb-item active">Service</li>
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
            <form onSubmit={formService}>
              <div class="form-group">
                <label>Kategori</label>
                <select
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="basic">Basic</option>
                  <option value="premium">Premium</option>
                  <option value="enterprise">Enterprise</option>
                </select>
                <small class="form-text text-danger">{validation?.name}</small>
              </div>
              <div class="form-group">
                <label>Bulan</label>
                <input
                  class="form-control"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.month}</small>
              </div>
              <div class="form-group">
                <label>Diskon</label>
                <input
                  class="form-control"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <small class="form-text text-danger">
                  {validation?.discount}
                </small>
              </div>
              <div class="form-group">
                <label>Harga</label>
                <input
                  class="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.price}</small>
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

export default Update;
