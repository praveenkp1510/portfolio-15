import { useState, useMemo } from 'react';

export const useProjectFilter = (projects) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = filter === 'all' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [projects, filter, searchTerm]);

  const categories = useMemo(() => {
    const cats = ['all', ...new Set(projects.map(p => p.category))];
    return cats;
  }, [projects]);

  return {
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    filteredProjects,
    categories
  };
};
