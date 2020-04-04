import React from 'react';
import DataBody from './DataBody';

function DataTable({headings, users}) {
    console.log(headings)
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {headings.map(({name}) => {
                            return (
                                <th
                                    key={name}
                                >
                                    {name}
                                </th>
                            )
                        } )}
                    </tr>
                </thead>

                <DataBody
                
                users={users}
                />
                
            </table>

        </>
    )
}

export default DataTable
