
export const ProjectsListing: React.FC<ProjectsListingProps> = ({ 
    projects, 
    onProjectSelect, 
    className = '' 
  }) => {
    // State management
    const [activeFilter, setActiveFilter] = useState<'all' | ProjectStatus>('all');
    
    // Filter definitions
    const filters = [
      { id: 'all', label: 'All project', icon: <span className="mr-1">📋</span> },
      { id: 'in-progress', label: 'In-progress', icon: <span className="mr-1">🔄</span> },
      { id: 'completed', label: 'Completed', icon: <span className="mr-1">✅</span> },
      { id: 'reviews', label: 'Reviews', icon: <span className="mr-1">⭐</span> }
    ];
    
    // Filter projects based on active filter
    const filteredProjects = useMemo(() => {
      if (activeFilter === 'all') return projects;
      if (activeFilter === 'reviews') return projects.filter(p => p.status === 'completed');
      return projects.filter(project => project.status === activeFilter);
    }, [projects, activeFilter]);
    
    // Map domain models to view models for presentation
    const projectViewModels = useMemo(() => {
      return filteredProjects.map(ProjectUtils.mapToViewModel);
    }, [filteredProjects]);
    
    // Event handlers
    const handleFilterChange = useCallback((filterId: string) => {
      setActiveFilter(filterId as 'all' | ProjectStatus);
    }, []);
    
    return (
      <div className={`projects-listing ${className}`}>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Projects</h1>
        
        {/* Filters */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              label={filter.label}
              icon={filter.icon}
              isActive={activeFilter === filter.id}
              onClick={() => handleFilterChange(filter.id)}
            />
          ))}
        </div>
        
        {/* Projects List */}
        <div className="space-y-4">
          {projectViewModels.length > 0 ? (
            projectViewModels.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onProjectSelect}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No projects found matching your filter criteria.
            </div>
          )}
        </div>
      </div>
    );
  };
  
  