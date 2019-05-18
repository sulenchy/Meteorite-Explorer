import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, } from 'redux';
import { fetchItem, isLoading, isComplete } from '../actions/index';



interface IProps {
    item?: [],
    actions?: () => {};
    isLoading?: boolean
}
interface IState {
    item: []
    isLoading: false
}

export class App extends React.Component<IProps, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            item: [],
            isLoading: false
        }
    }



    async componentDidMount() {
        console.log('props ======>', this.props)
        
    }

    render() {
        return (
            <div className="main-container">
                <div>Meteorite Explorer</div>
                <form>
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>
                <div className="table-container">
                    <table>
                        <thead className="table-head">
                            <tr>
                                <td className="table-cell">Name</td>
                                <td className="table-cell">Id</td>
                                <td className="table-cell">Name Type</td>
                                <td className="table-cell">Rec Class</td>
                                <td className="table-cell">Mass (g)</td>
                                <td className="table-cell">Fall</td>
                                <td className="table-cell">Year</td>
                                <td className="table-cell">Latitude</td>
                                <td className="table-cell">Longitude</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.item.map((element: any, index: number) => {
                                    let year = element.year;
                                    return (
                                        <tr key={`tr- ${index}`}>
                                            <td>{element.name}</td>
                                            <td>{element.id}</td>
                                            <td>{element.nametype}</td>
                                            <td>{element.recclass}</td>
                                            <td>{element.mass}</td>
                                            <td>{element.fall}</td>
                                            <td>{year ? year.slice(0, 4) : ''}</td>
                                            <td>{element.reclat}</td>
                                            <td>{element.reclong}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.item,
        isLoading: state.isLoading,
    }
};

const mapDispatchToProps = dispatch => ({
    actions: dispatch(fetchItem),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
