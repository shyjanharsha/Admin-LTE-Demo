import React, { Component } from 'react'
import axios from "axios";
class HomeContent extends Component {
    constructor(props){
		super(props);
	    this.state = {
	        productCategory: []
	    };
	}

	componentDidMount() {
        
        axios.get(
                `https://fakestoreapi.com/products/category/jewelery`
            )
            .then(res => res.data)            
            .then(res => {
                this.setState({ productCategory: res });
            });
    }
    renderProductDetails(){
        return(this.state.productCategory.map((product, index) =>{
            return (
                <tr key={index}>
                    <td>
                      <img src={product.image} alt="Product 1" className="img-circle img-size-32 mr-2" />
                    </td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      {product.title}
                    </td>
                    <td>
                      {product.rating.rate}
                    </td>
                </tr>
            )
        }))
    }
    render() {
        console.log(this.state, "state.........................")
        return (
            <div>
            {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard v3</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard v3</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Online Store Visitors</h3>
                <a href="javascript:void(0);">View Report</a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <p className="d-flex flex-column">
                  <span className="text-bold text-lg">820</span>
                  <span>Visitors Over Time</span>
                </p>
                <p className="ml-auto d-flex flex-column text-right">
                  <span className="text-success">
                    <i className="fas fa-arrow-up" /> 12.5%
                  </span>
                  <span className="text-muted">Since last week</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="position-relative mb-4">
                <canvas id="visitors-chart" height={200} />
              </div>
              <div className="d-flex flex-row justify-content-end">
                <span className="mr-2">
                  <i className="fas fa-square text-primary" /> This Week
                </span>
                <span>
                  <i className="fas fa-square text-gray" /> Last Week
                </span>
              </div>
            </div>
          </div>
          {/* /.card */}
          <div className="card">
            <div className="card-header border-0">
              <h3 className="card-title">Products</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-tool btn-sm">
                  <i className="fas fa-download" />
                </a>
                <a href="#" className="btn btn-tool btn-sm">
                  <i className="fas fa-bars" />
                </a>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-striped table-valign-middle">
                <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderProductDetails()}
                </tbody>
              </table>
            </div>
          </div>
          {/* /.card */}
        </div>
        {/* /.col-md-6 */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Sales</h3>
                <a href="javascript:void(0);">View Report</a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <p className="d-flex flex-column">
                  <span className="text-bold text-lg">$18,230.00</span>
                  <span>Sales Over Time</span>
                </p>
                <p className="ml-auto d-flex flex-column text-right">
                  <span className="text-success">
                    <i className="fas fa-arrow-up" /> 33.1%
                  </span>
                  <span className="text-muted">Since last month</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="position-relative mb-4">
                <canvas id="sales-chart" height={200} />
              </div>
              <div className="d-flex flex-row justify-content-end">
                <span className="mr-2">
                  <i className="fas fa-square text-primary" /> This year
                </span>
                <span>
                  <i className="fas fa-square text-gray" /> Last year
                </span>
              </div>
            </div>
          </div>
          {/* /.card */}
          <div className="card">
            <div className="card-header border-0">
              <h3 className="card-title">Online Store Overview</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-sm btn-tool">
                  <i className="fas fa-download" />
                </a>
                <a href="#" className="btn btn-sm btn-tool">
                  <i className="fas fa-bars" />
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                <p className="text-success text-xl">
                  <i className="ion ion-ios-refresh-empty" />
                </p>
                <p className="d-flex flex-column text-right">
                  <span className="font-weight-bold">
                    <i className="ion ion-android-arrow-up text-success" /> 12%
                  </span>
                  <span className="text-muted">CONVERSION RATE</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                <p className="text-warning text-xl">
                  <i className="ion ion-ios-cart-outline" />
                </p>
                <p className="d-flex flex-column text-right">
                  <span className="font-weight-bold">
                    <i className="ion ion-android-arrow-up text-warning" /> 0.8%
                  </span>
                  <span className="text-muted">SALES RATE</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p className="text-danger text-xl">
                  <i className="ion ion-ios-people-outline" />
                </p>
                <p className="d-flex flex-column text-right">
                  <span className="font-weight-bold">
                    <i className="ion ion-android-arrow-down text-danger" /> 1%
                  </span>
                  <span className="text-muted">REGISTRATION RATE</span>
                </p>
              </div>
              {/* /.d-flex */}
            </div>
          </div>
        </div>
        {/* /.col-md-6 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

        </div>
        )
    }
}

export default HomeContent
