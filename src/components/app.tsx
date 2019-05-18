import * as React from  'react';

import data from '../helpers/data';

export class App extends React.Component<IProps, {}>{

   componentDidMount(){

   }

    render(){
        return (
            <div>
                <div>Meteorite Explorer</div>
                <form>
                    <input type="text"/>
                    <button type="submit">Search</button>
                </form>
                <table>
                    <thead>
                        <tr>
                        <td>Name</td>
                        <td>Id</td>
                        <td>Name Type</td>
                        <td>Rec Class</td>
                        <td>Mass (g)</td>
                        <td>Fall</td>
                        <td>Year</td>
                        <td>Latitude</td>
                        <td>Longitude</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}


interface IProps {
    name: string;
}



