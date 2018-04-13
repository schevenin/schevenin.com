//
// config file
// --------------------------------------------------
//
// customize the template function via this file.
//
// but for the contact form and subscribe, please check the documentation
//

//
// section animation
// --------------------------------------------------
var _section_animation_duration =                 400; // [millisecond] - try change this value and check the page animation :)

//
// site border
// --------------------------------------------------
var _site_bg_border =                             true; // [true, false] - site border enable / disable

//
// countdown
// --------------------------------------------------
var _countdown =                                  true; // [true, false] - countdown enable / disable
var _countdown_date =                             [2016, 3, 25]; // [2016, 12, 1] mean 2016[year] - 12[month] - 01[day]
var _countdown_utc =                              false; // [true, false] - utc time

//
// background effect (cloud / star)
// --------------------------------------------------
var _site_bg_effect =                             0; // 0 = disable, 1 = cloud, 2 = constellation, 3 = parallax star star,
var _side_bg_effect_parallax =                    false; // [true, false] - enable parallax effect on above effect, its force disable on mobile, and not work with outdated browser

// if _bg_effect == 1 (cloud)
var _cloud_opacity =                              1; // [0.1 to 1] - cloud opacity

// if _bg_effect == 2 (constellation)

var _constellation_color =                        'rgba(255, 255, 255, .9)';// [rgba format] - constellation color
var _constellation_width =                        1.5; // [px] - constellation width

// if _bg_effect == 3 (parallax star)
var _parallax_star_opacity =                      1; // [0.1 to 1] - parallax star opacity

//
// background
// --------------------------------------------------
//
// choose background version for both desktop and mobile :)
//

// for desktop
var _bg_style_desktop =                           1;
                                                    // 0 = flat color
                                                    // 1 = image
                                                    // 2 = image (mp3 audio)
                                                    // 3 = slideshow
                                                    // 4 = slideshow (mp3 audio)
                                                    // 5 = slideshow (kenburn)
                                                    // 6 = slideshow (kenburn, mp3 audio)
                                                    // 7 = html5 video (mute)
                                                    // 8 = html5 video (video audio)
                                                    // 9 = html5 video (mp3 audio)
                                                    // 10 = youtube video (mute)
                                                    // 11 = youtube video (video audio)
                                                    // 12 = youtube video (mp3 audio)

// for mobile
var _bg_style_mobile =                            1;
                                                    // 0 = flat color
                                                    // 1 = image
                                                    // 2 = image (mp3 audio)
                                                    // 3 = slideshow
                                                    // 4 = slideshow (mp3 audio)
                                                    // 5 = slideshow (kenburn)
                                                    // 6 = slideshow (kenburn, mp3 audio)

// if _bg_style == 4 - 6 (slideshow)
var _bg_slideshow_image_amount =                  2; // slideshow image amount
var _bg_slideshow_duration =                      9000; // millisecond

// if _bg_style == 10 - 12 (youtube video)
var _bg_video_youtube_url =                       'sRhkIO1QzA4'; // youtube video url id - https://www.youtube.com/watch?v=sRhkIO1QzA4
var _bg_video_youtube_quality =                   'hightres'; // hightres, hd1080, hd720, default - youtube video quality
var _bg_video_youtube_start =                     1; // seconds - video start time
var _bg_video_youtube_end =                       0; // seconds - video end time, 0 to ignored
var _bg_video_youtube_loop =                      true; // true, false - video loop
