/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Movie {
  id: number;
  title: string;
  genre: string;
  duration?: string;
  rating?: string;
  image: string;
  time?: string;
  synopsis: string;
  cast: string[];
  director: string;
  country: string;
  pegi: string;
  trailer: string;
  isUpcoming: boolean;
  releaseDate?: string;
  isWeeklyChoice?: boolean;
  isFeatured?: boolean;
}
