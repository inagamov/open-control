const avatars = [
  'https://media.licdn.com/dms/image/C4E03AQGw1v_FxUk8Nw/profile-displayphoto-shrink_800_800/0/1658746900948?e=2147483647&v=beta&t=KhqtB9qrPPz72p9ENd_CZCVRg929x7q1tcebeUlREak',
  'https://media.licdn.com/dms/image/C5603AQHaaK2HrfETOQ/profile-displayphoto-shrink_800_800/0/1636901431703?e=2147483647&v=beta&t=dNFuP5ZG20qjCaUkdXuOGxeQHKcCviL9HaiUaHB1t5Y',
  'https://www.hbs.edu/about/PublishingImages/school-leadership/patrick-mullane-2021.jpg',
  'https://media.istockphoto.com/id/1167309176/photo/profile-view-of-elegant-senior-businessman.jpg?s=612x612&w=0&k=20&c=QOqEYmAbSnet_6BUQc-rutthVLmz-amlP5iuVOW20ac=',
  'https://media.licdn.com/dms/image/D5603AQFtZSLYYk7GGA/profile-displayphoto-shrink_800_800/0/1661721065095?e=2147483647&v=beta&t=i88P20dowQQ-3yIqjTK6E0LKmXsf_tj9u-4hCryH_7c',
  'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=',
  'https://i0.wp.com/reneebowen.com/wp-content/uploads/2017/03/ArmandoWEB-1-e1562534628519.jpg?fit=715%2C800&ssl=1',
  'https://img.freepik.com/premium-photo/smiling-millennial-confident-black-guy-posing-photo-looking-camera_709984-1764.jpg',
  'https://img.freepik.com/premium-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-sui_1258-88420.jpg',
  'https://media.istockphoto.com/id/1329936184/photo/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera.jpg?s=612x612&w=0&k=20&c=cCeWt0GYUtcFsGFi6hTFci-d5KZY6FAd_UchY9V5aSo=',
  'https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=',
];

export default function () {
  return avatars[Math.floor(Math.random() * avatars.length)];
}
