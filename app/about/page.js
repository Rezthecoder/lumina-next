export default function Page() {
    return (
        <>
            <section className="hero">
                <div className="container container-sm">
                    <h2> <span className="bg-primary">Inspired</span> minds, shaping exceptional projects fueled by
                        <span className="bg-primary">ingenuity </span>
                    </h2>
                </div>
            </section>
            <section className="services">
                <div className="container">
                    <h2 className="section-heading">Our Services</h2>
                    <div className="services-flex">
                        <div className="service-item">
                            <h2>Photography</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quod iste, officiis quos maiores
                                commodi eum quasi earum porro ullam!</p>
                        </div>
                        <div className="service-item">
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ad velit laboriosam officiis
                                cumque ipsum hic nobis odit ab.</p>
                        </div>
                        <div className="service-item">
                            <h2>Graphic Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem natus rem voluptatem
                                mollitia amet dignissimos. Ipsam deserunt enim maiores deleniti.</p>
                        </div>
                    </div>

                </div>

            </section>
            <section className="team">
                <div className="container container-lg">
                    <h2 className="section-heading">Our Team</h2>
                    <div className="team-flex">
                        <div className="team-item">
                            <img src="images/team1.jpg" alt="Team Member" />
                            <h4>Kevin Samson</h4>
                            <p>Founder</p>
                        </div>
                        <div className="team-item">
                            <img src="images/team2.jpg" alt="Team Member" />
                            <h4>Rebecca Williams</h4>
                            <p>Designer</p>
                        </div>
                        <div className="team-item">
                            <img src="images/team3.jpg" alt="Team Member" />
                            <h4>Ben Markson</h4>
                            <p>Designer/Developer</p>
                        </div>
                    </div>
                </div>
            </section></>
    )
}