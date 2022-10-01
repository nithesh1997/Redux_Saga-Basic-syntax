import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    this.props.dataDispatch()
  }
  render() {
    const { loading, registrants, error } = this.props.sagadata
    return (
      <div className='container'><br />
        <h4>Vaccine Members</h4><br />
        {loading ? <h4 style={{ textAlign: 'center' }}>Loading...</h4> :
          (<table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Vaccine</th>
              </tr>
            </thead>
            <tbody>
              {registrants.map(e => (
                <tr>
                  <th scope="row">{e.id}</th>
                  <td>{e.name}</td>
                  <td>{e.date}</td>
                  <td>{e.vaccine}</td>
                </tr>
              ))}
              {error && <tr>
                <td colspan="4">{<h5 style={{ textAlign: 'center', color: 'red' }}>{error}</h5>}</td>
              </tr>}

            </tbody>
          </table>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

const mapDisatchToProps = (dispatch) => {
  return {
    dataDispatch: () => dispatch({ type: 'SAGA_BENEFICIARY_LIST' })
  }
}


export default connect(mapStateToProps, mapDisatchToProps)(App)