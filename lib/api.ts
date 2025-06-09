import { Track, StrapiResponse } from "../types/track";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export const fetchTracks = async (): Promise<Track[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/tracks?populate=*`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch tracks");
    }

    const data: StrapiResponse = await response.json();

    return data.data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description
        .map((desc) => desc.children.map((child) => child.text).join(" "))
        .join(" "),
      subtitle: item.subtitle || "",
      poster: {
        url: item.poster[0]?.url ? `${STRAPI_URL}${item.poster[0].url}` : "",
      },
      audio: {
        url: item.audio[0]?.url ? `${STRAPI_URL}${item.audio[0].url}` : "",
      },
    }));
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }
};
