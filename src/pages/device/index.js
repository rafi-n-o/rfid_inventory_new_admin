import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevices } from "../../redux/action/device";
import { Link } from "react-router-dom";

const Device = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  const { devices } = useSelector((state) => state.devices);

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
                  <a href="#">Home</a>
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
            <Link
              to="/devices/create"
              type="button"
              className="btn btn-tool"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fas fa-plus"></i>
            </Link>

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
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Tipe</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {devices?.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.type}</td>
                      <td>
                        <img
                          src={value.image}
                          className="img-fluid img-thumbnail"
                          style={{ maxHeight: 80 }}
                        />
                      </td>
                      <td>{value.name}</td>
                      <td>{value.price}</td>
                      <td>
                        <Link
                          to={`/devices/${value.id}`}
                          className="btn btn-warning"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </section>
    </>
  );
};

export default Device;
