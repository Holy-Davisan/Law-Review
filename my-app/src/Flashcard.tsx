import React, { useState, useCallback } from 'react';
import { flashcards, categories, FlashcardData } from './flashcardsData';
import './Flashcard.css';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const FlashcardApp: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [deck, setDeck] = useState<FlashcardData[]>(flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [isShuffled, setIsShuffled] = useState(false);

  const filterDeck = useCallback(
    (category: string, shuffled: boolean) => {
      let filtered =
        category === 'All' ? flashcards : flashcards.filter((f) => f.category === category);
      if (shuffled) filtered = shuffle(filtered);
      setDeck(filtered);
      setCurrentIndex(0);
      setIsFlipped(false);
    },
    []
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterDeck(category, isShuffled);
  };

  const handleShuffle = () => {
    const next = !isShuffled;
    setIsShuffled(next);
    filterDeck(selectedCategory, next);
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsFlipped(false);
  };

  const prev = () => goTo((currentIndex - 1 + deck.length) % deck.length);
  const next = () => goTo((currentIndex + 1) % deck.length);

  const toggleKnown = () => {
    const id = deck[currentIndex].id;
    setKnown((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const resetProgress = () => {
    setKnown(new Set());
  };

  if (deck.length === 0) {
    return (
      <div className="fc-app">
        <p className="fc-empty">No cards in this category.</p>
      </div>
    );
  }

  const card = deck[currentIndex];
  const isKnown = known.has(card.id);
  const progress = deck.length > 0 ? Math.round((known.size / deck.length) * 100) : 0;

  return (
    <div className="fc-app">
      <header className="fc-header">
        <h1 className="fc-title">Law Flashcards</h1>
        <p className="fc-subtitle">Bar Exam Review</p>
      </header>

      <div className="fc-controls">
        <div className="fc-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`fc-cat-btn${selectedCategory === cat ? ' active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="fc-actions">
          <button className={`fc-action-btn${isShuffled ? ' active' : ''}`} onClick={handleShuffle}>
            {isShuffled ? '⇌ Shuffled' : '⇌ Shuffle'}
          </button>
          <button className="fc-action-btn" onClick={resetProgress}>
            Reset Progress
          </button>
        </div>
      </div>

      <div className="fc-progress-bar-wrap">
        <div className="fc-progress-bar-track">
          <div className="fc-progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="fc-progress-label">
          {known.size} / {deck.length} known ({progress}%)
        </span>
      </div>

      <div className="fc-stage">
        <button className="fc-nav-btn fc-prev" onClick={prev} aria-label="Previous card">
          &#8249;
        </button>

        <div
          className={`fc-card-container${isFlipped ? ' flipped' : ''}`}
          onClick={() => setIsFlipped((f) => !f)}
          role="button"
          aria-label={isFlipped ? 'Hide answer' : 'Reveal answer'}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsFlipped((f) => !f)}
        >
          <div className="fc-card-inner">
            <div className="fc-card fc-card-front">
              <span className="fc-card-tag">{card.category}</span>
              <p className="fc-card-text">{card.question}</p>
              <span className="fc-card-hint">Click to reveal answer</span>
            </div>
            <div className="fc-card fc-card-back">
              <span className="fc-card-tag">{card.category}</span>
              <p className="fc-card-text">{card.answer}</p>
              <span className="fc-card-hint">Click to see question</span>
            </div>
          </div>
        </div>

        <button className="fc-nav-btn fc-next" onClick={next} aria-label="Next card">
          &#8250;
        </button>
      </div>

      <div className="fc-footer">
        <span className="fc-counter">
          {currentIndex + 1} / {deck.length}
        </span>
        <button
          className={`fc-known-btn${isKnown ? ' known' : ''}`}
          onClick={toggleKnown}
        >
          {isKnown ? '✓ Known' : 'Mark as Known'}
        </button>
      </div>

      <div className="fc-dots">
        {deck.map((_, i) => (
          <button
            key={i}
            className={`fc-dot${i === currentIndex ? ' active' : ''}${known.has(deck[i].id) ? ' known' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashcardApp;
