module ActiveClass
  def new_link_to(name, href, options={})
    if href == current_page.url
      content_tag(:a, name + content_tag(:span, "", :class => "line"), :href => "#{href}", :class => "active")
    else
      content_tag(:a, name + content_tag(:span, "", :class => "line"), :href => "#{href}")
    end
  end
end
