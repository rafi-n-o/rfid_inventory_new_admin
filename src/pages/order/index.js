import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { approve, getOrders } from "../../redux/action/order";

const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const { orders } = useSelector((state) => state.orders);

  const [order, setOrder] = useState();
  console.log(order);

  const handleApprove = (id) => {
    approve(id)
      .then((res) => {
        toast.success(res.message);
        dispatch(getOrders());
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Order</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Order</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
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
                    <th>Email</th>
                    <th>Paket</th>
                    <th>Payment</th>
                    <th>Bukti Pembayaran</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.email}</td>
                      <td>
                        {value.service_data?.category} (
                        {value.service_data?.month} Bulan)
                      </td>
                      <td>{value.payment_type}</td>
                      <td>
                        <img
                          src={value.image}
                          className="img-fluid img-thumbnail"
                          style={{ maxHeight: 80 }}
                        />
                      </td>
                      <td>{value.status}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => setOrder(value)}
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => handleApprove(value.id)}
                        >
                          <i className="fas fa-check"></i> Approve
                        </button>
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

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Order Detail
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <td>Kategori</td>
                    <td>Durasi</td>
                    <td>Harga</td>
                    <td>Diskon</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order?.service_data?.category}</td>
                    <td>{order?.service_data?.month}</td>
                    <td>{order?.service_data?.price}</td>
                    <td>{order?.service_data?.discount}</td>
                    <td>{order?.service_data?.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
