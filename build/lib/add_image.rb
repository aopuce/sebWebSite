module AddImage
  def add_image(name, measure, extension)
    image_tag("opere/#{name}-#{measure}.#{extension}",  srcset: "opere/#{name}-#{measure}.#{extension} 1x, opere/@2x/#{name}-#{measure}-@2x.#{extension} 2x, opere/@3x/#{name}-#{measure}-@3x.#{extension} 3x", alt: "#{name}", :"data-name" => "#{name}", :class => "#{name}")
  end
end
