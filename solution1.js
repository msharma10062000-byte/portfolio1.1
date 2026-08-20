/**
 * Problem Solving Assessment: Profile Picture Dimension Check
 */

function processPhotos(L, N, photos) {
  const results = [];

  for (let i = 0; i < N; i++) {
    const { W, H } = photos[i];

    if (W < L || H < L) {
      results.push("UPLOAD ANOTHER");
    } else if (W === H) {
      results.push("ACCEPTED");
    } else {
      results.push("CROP IT");
    }
  }

  return results;
}

// Sample Test Run matching assessment input
const L = 180;
const N = 3;
const photos = [
  { W: 640, H: 480 },
  { W: 120, H: 300 },
  { W: 180, H: 180 }
];

const output = processPhotos(L, N, photos);
console.log(output.join('\n'));
// Output:
// CROP IT
// UPLOAD ANOTHER
// ACCEPTED