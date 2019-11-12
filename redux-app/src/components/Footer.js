import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <p>
        Show: <FilterLink filter={ VisibilityFilters.SHOW_ALL }></FilterLink>
        {', '}
        <FilterLink filter={ VisibilityFilters.SHOW_ACTIVE }></FilterLink>
        {', '}
        <FilterLink filter={ VisibilityFilters.SHOW_COMPLETED }></FilterLink>
    </p>
)

export default Footer