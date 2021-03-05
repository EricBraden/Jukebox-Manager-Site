package com.hipsterheaven.music;

import com.hipsterheaven.music.resources.Album;
import com.hipsterheaven.music.resources.Comment;
import com.hipsterheaven.music.resources.Song;
import com.hipsterheaven.music.services.AlbumService;
import com.hipsterheaven.music.services.SongService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    AlbumService albumService;
    SongService songService;

    public Populator(AlbumService albumService, SongService songService) {
        this.albumService = albumService;
        this.songService = songService;
    }

    @Override
    public void run(String... args) throws Exception {
        Album heavenTonight = new Album ("Heaven Tonight","Cheap Trick","Epic Records","Heaven Tonight is considered Cheap Trick's best album by many fans and critics.","./images/CheapTrick-HeavenTonight.jpg");
        albumService.save(heavenTonight);
        Song surrender = new Song("Surrender","4:16",10, heavenTonight, "https://www.youtube.com/watch?v=ZbkypX1OhZ0");
                songService.save(surrender);

        Album journeyGreatistHits = new Album("Greatist Hits", "Journey", "Columbia Records",
                "Greatest Hits is a compilation album by the American rock band Journey, originally released in 1988 by Columbia Records. It is the band's best-selling career disc, spending 554 weeks on the Billboard 200 album chart.", "./images/Journey-GreatestHits.jpg");
        albumService.save(journeyGreatistHits);
        Song dontStopBelievin = new Song("Don't Stop Believin'", "4:10", 10, journeyGreatistHits, "https://www.youtube.com/watch?v=VcjzHMhBtf0");
        songService.save(dontStopBelievin);

        Album so = new Album("So", "Peter Gabriel", "Parlophone Records",
                "Often considered his best and most accessible album, So was an immediate commercial success and transformed Gabriel from a cult artist into a mainstream star, becoming his best-selling solo release.", "./images/PeterGabriel-So.jpg");
        so.addComment(new Comment("This album changed my life!  I left college, bought a synth and toured with my Peter Gabriel tribute band in eastern Oregon riding a Volkswagen Rabbit, diesel of course.", "Leon"));
        albumService.save(so);
        Song sledgehammer = new Song("Sledgehammer", "5:12", 9, so, "https://www.youtube.com/watch?v=OJWJE0x7T4Q");
        songService.save(sledgehammer);

        Album bluesRoots = new Album("Blues & Roots", "Charles Mingus", "Atlantic Records",
                "\"This record is unusual— it presents only one part of my musical world, the blues.\" -Charles Mingus", "./images/CharlesMingus-RootsAndBlues.jpg");
        albumService.save(bluesRoots);
        Song moanin = new Song("Moanin'", "7:58", 10, bluesRoots, "https://www.youtube.com/watch?v=__OSyznVDOY");
        moanin.addComment(new Comment("Best bari sax solo in a generation!", "Leo P."));
        songService.save(moanin);
        Song wednesdayNightPrayerMeeting = new Song("WeWdnesday Night Prayer Meeting", "5:45", 8, bluesRoots, "https://www.youtube.com/watch?v=x1WQR8Ti1vk");
        songService.save(wednesdayNightPrayerMeeting);

//        Album loveBelow = new Album("Speakerboxxx/The Love Below", "OutKast", "Artista Records",
//                "Speakerboxxx/The Love Below received widespread acclaim from music critics, who praised the consistency of Big Boi's Speakerboxxx and the eclectic musical style of André 3000's The Love Below.", "http://placekitten.com/200/300");
//        albumService.save(loveBelow);
//        Song heyYa = new Song("Hey Ya!", "3:55", 11, loveBelow, "https://youtu.be/dQw4w9WgXcQ");
//        songService.save(heyYa);
//        Song roses = new Song("Roses", "6:09", 7, loveBelow, "https://youtu.be/dQw4w9WgXcQ");
//        songService.save(roses);
//        Song rooster = new Song("The Rooster", "3:57", 10, loveBelow, "https://youtu.be/dQw4w9WgXcQ");
//        rooster.addComment(new Comment("Hugely underrated song!", "Dean"));
//        songService.save(rooster);


        Album doom = new Album("Doom","Mick Gordon & id Software","Bethesda Softworks","The original soundtrack for the Doom video game.","./images/Doom-Cover.jpg");
        albumService.save(doom);
        Song bfgDivision = new Song("BFG Division","8:27",10, doom, "https://www.youtube.com/watch?v=QHRuTYtSbJQ");
        songService.save(bfgDivision);

        Album powersOf10 = new Album("Powers of 10","Stephan Bodzin","Kontor New Media Music","Fabulous music from a lesser-known artist.","./images/Powers-of-ten.jpg");
        albumService.save(powersOf10);
        Song singularity= new Song("Singularity","7:02",10, powersOf10, "https://www.youtube.com/watch?v=HtGIBOTOnoY");
        songService.save(singularity);

        Album fashionNugget = new Album("Fashion Nugget","Cake","SME","Widely considered to be one of the most significant albums of the 90s.","./images/Fashion-Nugget.jpg");
        albumService.save(fashionNugget);
        Song shortSkirtLongJacket = new Song("Short Skirt Long Jacket","3:45",10, fashionNugget, "https://www.youtube.com/watch?v=X5KmB8Laemg&t=2s");
        songService.save(shortSkirtLongJacket);

        Album msColombia = new Album("Miss Colombia","Lido Pimienta","ANTI-Records","Great new album from the Colombian-Canadian artist.","./images/Miss-Columbia.jpg");
        albumService.save(msColombia);
        Song nada = new Song("Nada","5:06",10, msColombia, "https://www.youtube.com/watch?v=Cje1mE92Ymg");
        songService.save(nada);
    }
}
