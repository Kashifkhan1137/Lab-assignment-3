import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = async () => {
    try {
      setIsLoading(true);
      // Simulate API call or fetch new data here
      const response = await fetch(`your-api-endpoint?page=${page}`);
      const newItems = await response.json();

      setItems(prevItems => [...prevItems, ...newItems]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 200 &&
          !isLoading
        ) {
          loadMoreItems();
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isLoading]);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="item">
          {/* Render your item content here */}
        </div>
      ))}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
