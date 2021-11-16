import React from 'react'
import HomeContent from "./components/HomeContent";


const Home = () => {
    return (
        <div>
  <div>
  <div classname="content-wrapper">
    {'{'}/* Content Header (Page header) */{'}'}
    <div classname="content-header">
      <div classname="container-fluid">
        <div classname="row mb-2">
          <div classname="col-sm-6">
            <h1 classname="m-0">Dashboard v3</h1>
          </div>{'{'}/* /.col */{'}'}
          <div classname="col-sm-6">
            <ol classname="breadcrumb float-sm-right">
              <li classname="breadcrumb-item"><a href="#">Home</a></li>
              <li classname="breadcrumb-item active">Dashboard v3</li>
            </ol>
          </div>{'{'}/* /.col */{'}'}
        </div>{'{'}/* /.row */{'}'}
      </div>{'{'}/* /.container-fluid */{'}'}
    </div>
    {'{'}/* /.content-header */{'}'}
    {'{'}/* Main content */{'}'}
    <div classname="content">
      <div classname="container-fluid">
        <div classname="row">
          <div classname="col-lg-6">
            <div classname="card">
              <div classname="card-header border-0">
                <div classname="d-flex justify-content-between">
                  <h3 classname="card-title">Online Store Visitors</h3>
                  <a href="javascript:void(0);">View Report</a>
                </div>
              </div>
              <div classname="card-body">
                <div classname="d-flex">
                  <p classname="d-flex flex-column">
                    <span classname="text-bold text-lg">820</span>
                    <span>Visitors Over Time</span>
                  </p>
                  <p classname="ml-auto d-flex flex-column text-right">
                    <span classname="text-success">
                      <i classname="fas fa-arrow-up"> 12.5%
                      </i></span><i classname="fas fa-arrow-up">
                      <span classname="text-muted">Since last week</span>
                    </i></p><i classname="fas fa-arrow-up">
                  </i></div><i classname="fas fa-arrow-up">
                  {'{'}/* /.d-flex */{'}'}
                  <div classname="position-relative mb-4">
                    <canvas id="visitors-chart" height="{200}">
                    </canvas></div>
                  <div classname="d-flex flex-row justify-content-end">
                    <span classname="mr-2">
                      <i classname="fas fa-square text-primary"> This Week
                      </i></span><i classname="fas fa-square text-primary">
                      <span>
                        <i classname="fas fa-square text-gray"> Last Week
                        </i></span><i classname="fas fa-square text-gray">
                      </i></i></div><i classname="fas fa-square text-primary"><i classname="fas fa-square text-gray">
                    </i></i></i></div><i classname="fas fa-arrow-up"><i classname="fas fa-square text-primary"><i classname="fas fa-square text-gray">
                  </i></i></i></div><i classname="fas fa-arrow-up"><i classname="fas fa-square text-primary"><i classname="fas fa-square text-gray">
                  {'{'}/* /.card */{'}'}
                  <div classname="card">
                    <div classname="card-header border-0">
                      <h3 classname="card-title">Products</h3>
                      <div classname="card-tools">
                        <a href="#" classname="btn btn-tool btn-sm">
                          <i classname="fas fa-download">
                          </i></a><i classname="fas fa-download">
                          <a href="#" classname="btn btn-tool btn-sm">
                            <i classname="fas fa-bars">
                            </i></a><i classname="fas fa-bars">
                          </i></i></div><i classname="fas fa-download"><i classname="fas fa-bars">
                        </i></i></div><i classname="fas fa-download"><i classname="fas fa-bars">
                        <div classname="card-body table-responsive p-0">
                          <table classname="table table-striped table-valign-middle">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Sales</th>
                                <th>More</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img src="dist/img/default-150x150.png" alt="Product 1" classname="img-circle img-size-32 mr-2" />
                                  Some Product
                                </td>
                                <td>$13 USD</td>
                                <td>
                                  <small classname="text-success mr-1">
                                    <i classname="fas fa-arrow-up">
                                      12%
                                    </i></small><i classname="fas fa-arrow-up">
                                    12,000 Sold
                                  </i></td>
                                <td>
                                  <a href="#" classname="text-muted">
                                    <i classname="fas fa-search">
                                    </i></a><i classname="fas fa-search">
                                  </i></td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="dist/img/default-150x150.png" alt="Product 1" classname="img-circle img-size-32 mr-2" />
                                  Another Product
                                </td>
                                <td>$29 USD</td>
                                <td>
                                  <small classname="text-warning mr-1">
                                    <i classname="fas fa-arrow-down">
                                      0.5%
                                    </i></small><i classname="fas fa-arrow-down">
                                    123,234 Sold
                                  </i></td>
                                <td>
                                  <a href="#" classname="text-muted">
                                    <i classname="fas fa-search">
                                    </i></a><i classname="fas fa-search">
                                  </i></td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="dist/img/default-150x150.png" alt="Product 1" classname="img-circle img-size-32 mr-2" />
                                  Amazing Product
                                </td>
                                <td>$1,230 USD</td>
                                <td>
                                  <small classname="text-danger mr-1">
                                    <i classname="fas fa-arrow-down">
                                      3%
                                    </i></small><i classname="fas fa-arrow-down">
                                    198 Sold
                                  </i></td>
                                <td>
                                  <a href="#" classname="text-muted">
                                    <i classname="fas fa-search">
                                    </i></a><i classname="fas fa-search">
                                  </i></td>
                              </tr>
                              <tr>
                                <td>
                                  <img src="dist/img/default-150x150.png" alt="Product 1" classname="img-circle img-size-32 mr-2" />
                                  Perfect Item
                                  <span classname="badge bg-danger">NEW</span>
                                </td>
                                <td>$199 USD</td>
                                <td>
                                  <small classname="text-success mr-1">
                                    <i classname="fas fa-arrow-up">
                                      63%
                                    </i></small><i classname="fas fa-arrow-up">
                                    87 Sold
                                  </i></td>
                                <td>
                                  <a href="#" classname="text-muted">
                                    <i classname="fas fa-search">
                                    </i></a><i classname="fas fa-search">
                                  </i></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </i></i></div><i classname="fas fa-download"><i classname="fas fa-bars">
                      {'{'}/* /.card */{'}'}
                    </i></i></i></i></i></div><i classname="fas fa-arrow-up"><i classname="fas fa-square text-primary"><i classname="fas fa-square text-gray"><i classname="fas fa-download"><i classname="fas fa-bars">
                    {'{'}/* /.col-md-6 */{'}'}
                    <div classname="col-lg-6">
                      <div classname="card">
                        <div classname="card-header border-0">
                          <div classname="d-flex justify-content-between">
                            <h3 classname="card-title">Sales</h3>
                            <a href="javascript:void(0);">View Report</a>
                          </div>
                        </div>
                        <div classname="card-body">
                          <div classname="d-flex">
                            <p classname="d-flex flex-column">
                              <span classname="text-bold text-lg">$18,230.00</span>
                              <span>Sales Over Time</span>
                            </p>
                            <p classname="ml-auto d-flex flex-column text-right">
                              <span classname="text-success">
                                <i classname="fas fa-arrow-up"> 33.1%
                                </i></span><i classname="fas fa-arrow-up">
                                <span classname="text-muted">Since last month</span>
                              </i></p><i classname="fas fa-arrow-up">
                            </i></div><i classname="fas fa-arrow-up">
                            {'{'}/* /.d-flex */{'}'}
                            <div classname="position-relative mb-4">
                              <canvas id="sales-chart" height="{200}">
                              </canvas></div>
                            <div classname="d-flex flex-row justify-content-end">
                              <span classname="mr-2">
                                <i classname="fas fa-square text-primary"> This year
                                </i></span><i classname="fas fa-square text-primary">
                                <span>
                                  <i classname="fas fa-square text-gray"> Last year
                                  </i></span><i classname="fas fa-square text-gray">
                                </i></i></div><i classname="fas fa-square text-primary"><i classname="fas fa-square text-gray">
                              </i></i></i></div><i classname="fas fa-arrow-up"><i classname="fas fa-square text-primary"><i classname="fas fa-square text-gray">
                            </i></i></i></div><i classname="fas fa-arrow-up"><i classname="fas fa-square text-primary"><i classname="fas fa-square text-gray">
                            {'{'}/* /.card */{'}'}
                            <div classname="card">
                              <div classname="card-header border-0">
                                <h3 classname="card-title">Online Store Overview</h3>
                                <div classname="card-tools">
                                  <a href="#" classname="btn btn-sm btn-tool">
                                    <i classname="fas fa-download">
                                    </i></a><i classname="fas fa-download">
                                    <a href="#" classname="btn btn-sm btn-tool">
                                      <i classname="fas fa-bars">
                                      </i></a><i classname="fas fa-bars">
                                    </i></i></div><i classname="fas fa-download"><i classname="fas fa-bars">
                                  </i></i></div><i classname="fas fa-download"><i classname="fas fa-bars">
                                  <div classname="card-body">
                                    <div classname="d-flex justify-content-between align-items-center border-bottom mb-3">
                                      <p classname="text-success text-xl">
                                        <i classname="ion ion-ios-refresh-empty">
                                        </i></p><i classname="ion ion-ios-refresh-empty">
                                        <p classname="d-flex flex-column text-right">
                                          <span classname="font-weight-bold">
                                            <i classname="ion ion-android-arrow-up text-success"> 12%
                                            </i></span><i classname="ion ion-android-arrow-up text-success">
                                            <span classname="text-muted">CONVERSION RATE</span>
                                          </i></p><i classname="ion ion-android-arrow-up text-success">
                                        </i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success">
                                        {'{'}/* /.d-flex */{'}'}
                                        <div classname="d-flex justify-content-between align-items-center border-bottom mb-3">
                                          <p classname="text-warning text-xl">
                                            <i classname="ion ion-ios-cart-outline">
                                            </i></p><i classname="ion ion-ios-cart-outline">
                                            <p classname="d-flex flex-column text-right">
                                              <span classname="font-weight-bold">
                                                <i classname="ion ion-android-arrow-up text-warning"> 0.8%
                                                </i></span><i classname="ion ion-android-arrow-up text-warning">
                                                <span classname="text-muted">SALES RATE</span>
                                              </i></p><i classname="ion ion-android-arrow-up text-warning">
                                            </i></i></div><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning">
                                            {'{'}/* /.d-flex */{'}'}
                                            <div classname="d-flex justify-content-between align-items-center mb-0">
                                              <p classname="text-danger text-xl">
                                                <i classname="ion ion-ios-people-outline">
                                                </i></p><i classname="ion ion-ios-people-outline">
                                                <p classname="d-flex flex-column text-right">
                                                  <span classname="font-weight-bold">
                                                    <i classname="ion ion-android-arrow-down text-danger"> 1%
                                                    </i></span><i classname="ion ion-android-arrow-down text-danger">
                                                    <span classname="text-muted">REGISTRATION RATE</span>
                                                  </i></p><i classname="ion ion-android-arrow-down text-danger">
                                                </i></i></div><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
                                                {'{'}/* /.d-flex */{'}'}
                                              </i></i></i></i></i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success"><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning"><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
                                            </i></i></i></i></i></i></i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success"><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning"><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
                                      </i></i></i></i></i></i></i></i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success"><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning"><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
                                {'{'}/* /.col-md-6 */{'}'}
                              </i></i></i></i></i></i></i></i></i></i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success"><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning"><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
                    {'{'}/* /.row */{'}'}
                  </i></i></i></i></i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success"><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning"><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
                  {'{'}/* /.container-fluid */{'}'}
                </i></i></i></i></i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success"><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning"><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
                {'{'}/* /.content */{'}'}
              </i></i></i></i></i></i></div><i classname="ion ion-ios-refresh-empty"><i classname="ion ion-android-arrow-up text-success"><i classname="ion ion-ios-cart-outline"><i classname="ion ion-android-arrow-up text-warning"><i classname="ion ion-ios-people-outline"><i classname="ion ion-android-arrow-down text-danger">
            </i></i></i></i></i></i></div>


        </div>
    )
}

export default Home
