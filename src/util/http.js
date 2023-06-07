import axios from "axios";

const BASE_URL = "http://localhost:3000";

export function getUserPlaylistById(userId) {
  const response = axios.get(BASE_URL + `/users/playlists/${userId}`);
  return response;
}

export async function getUserPlaylistDetail(userId, playlistId) {
  const response = await axios.get(
    BASE_URL + `/musicas/${userId}/${playlistId}`
  );
  return response.data.data;
}

export async function editUser(userId, body) {
  const response = await axios.patch(BASE_URL + `/users/${(userId, body)}`);
  console.log(response);
  return response.data;
}

export async function insertPlaylist(userId, body) {
  const response = await axios.post(
    BASE_URL + `/users/playlists/${userId}`,
    body
  );
  return response.data;
}

export async function removeMusicFromPlaylist(
  userId,
  playlistIndex,
  musicIndex
) {
  const response = await axios.delete(
    BASE_URL + `/musicas/${userId}/${playlistIndex}/${musicIndex}`
  );
  return response.data;
}

export function insertMusicIntoPlaylist(userId, playlistIndex, body) {
  axios.post(
    BASE_URL + `/musicas/${userId}/${playlistIndex}`,
    body
  ).then((response) => {
    console.log("Música Recebida "+response.data)
    return response.data;
  });
}
