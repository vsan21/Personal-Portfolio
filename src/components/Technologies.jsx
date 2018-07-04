import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Technologies.css';

export class Technologies extends Component {
    render() {
        return (
            <div id="technologies">
                <div className='header'>
                    <h1>TECHNOLOGIES</h1>
                </div>
                <div id="tech-skillset">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Frontend<hr/></th>
                                <th>Backend<hr/></th>
                                <th>Tools<hr/></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JavaScript</td>
                                <td>Node</td>
                                <td>Jasmine</td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>Express</td>
                                <td>Git</td>
                            </tr>
                            <tr>
                                <td>jQuery</td>
                                <td>MySQL</td>
                                <td>Github</td>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td>MongoDB</td>
                                <td>Command Line</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td></td>
                                <td>Atom</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}