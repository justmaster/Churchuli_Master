import React from 'react'

const Menu_Eng = ({items, langId}) => {
    return (
        <div className="section-center">
            {items.map((item) => {
                const { id, title, title_rus, title_eng, title_geo, img, desc, desc_rus, desc_geo, price } = item;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} 
                        alt=
                        {langId === "eng" ? title : 
                         langId === "rus" ? title_rus : 
                         langId === "geo" ? title_geo : (null)
                        } 
                        className='photo' />
                        <div className="item-info">
                            <header>
                                <h4>
                                    {
                                    langId === "eng" ? title : 
                                    langId === "rus" ? title_rus : 
                                    langId === "geo" ? title_geo : (null)
                                    } 
                                </h4>
                                <h4 className="price">₾{price}</h4>
                            </header>
                            <p className="item-text">
                                {
                                 langId === "eng" ? desc : 
                                 langId === "rus" ? desc_rus : 
                                 langId === "geo" ? desc_geo : (null)
                                }
                            </p>
                        </div>

                    </article>
                )
        })}

        </div>
    )
}


export default Menu_Eng