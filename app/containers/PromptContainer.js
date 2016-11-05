import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>Header text</h1>
        <div className="col-sm-12">
          <form action="">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github username"
                type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
