import Paragraph from "../components/Paragraph";

export default function AboutPage() {
    return (
        <div id="about">
            <h1>About Us</h1>
            <Paragraph>"We provide movies, comfortable seating, snacks, entertainment, and a welcoming community space for all."</Paragraph>
    <h2>Our Story</h2>
    <Paragraph>
Founded in 2002, AQuality Cinema was born out of a love for cinema and a desire to create a space where movie lovers could escape, connect, and be inspired. Over the years, we’ve grown into a beloved local destination, known for our state-of-the-art facilities, exceptional customer service, and commitment to showcasing the best in film—from blockbuster hits to independent gems.
    </Paragraph>

<h2>What We Offer</h2>
<table>
    <tr>
        <td><strong>Premium Viewing Experience</strong></td>
        <td>Enjoy the latest movies in crystal-clear digital projection and immersive surround sound. Our comfortable seating and spacious auditoriums ensure you have the best view in the house.</td>
    </tr>
    <tr>
        <td><strong>Diverse Film Selection</strong></td>
        <td>From action-packed blockbusters to heartwarming dramas, indie films, and family-friendly favorites, our carefully curated lineup has something for every taste.</td>
    </tr>
    <tr>
        <td><strong>Luxury Amenities</strong></td>
        <td>Treat yourself to our gourmet concessions, including freshly popped popcorn, delicious snacks, and refreshing beverages. Upgrade your experience with our VIP seating or private screening options.</td>
    </tr>
    <tr>
        <td><strong>Community Focus</strong></td>
        <td>We’re more than just a cinema—we’re a hub for the community. Hosting special events, film festivals, and charity screenings is our way of giving back and celebrating the art of filmmaking.</td>
    </tr>
</table>
<p>
[Your Cinema Name]  
[Address]  
[Phone Number]  
[Website URL]  
[Social Media Links]
</p>
        </div>
    );
};