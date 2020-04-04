// functional component do not need render functions
// functional components ONLY need return methods

import React from 'react';

function DataBody({users}) {
    // console.log(users)
        return (
            <>
                <tbody>
                    {users.map(({ image, name, phone, email, dob }) => {
                        console.log(name)
                        // console.log(name.first)
                        return (
                            <tr>
                                <td className="image">
                                    
                                </td>

                                <td className="name">
                                    {name}
                                </td>

                                <td className="phone">
                                
                                </td>

                                <td className="email">
                                
                                </td>

                                <td className="dob">
                                
                                </td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </>
        )
    }

export default DataBody;