import imaglen from "../assets/hamburguesas.jpg"
function Main (){
    return(
        <div className="main">
            <section className="section--hambur">
                <article className="hamburguesas_description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi tenetur nulla molestias veritatis, doloribus nemo natus quasi sint, dolorem rerum incidunt voluptas exercitationem? Dolore id sequi nostrum temporibus inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet autem non, suscipit reprehenderit, ratione esse nemo itaque illum ea dolorem assumenda sunt expedita, sequi repellat voluptate? Tempora, soluta aspernatur.</p>
                </article>
                <article className="contenedor--img--hambur">
                    <figure className="figure_cont--hambur">
                        <img src={imaglen} alt="" />
                    </figure>
                </article>
            </section>
        </div>
    )
}

export default Main