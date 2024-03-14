export const sortedBlogPost = (data) => {
 return data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Sort in descending order for latest date first
  });
}