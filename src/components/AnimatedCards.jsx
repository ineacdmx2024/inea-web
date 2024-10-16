"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardComponent = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderSubtitle = (subtitle) => {
    if (Array.isArray(subtitle)) {
      return (
        <ul className="list-disc list-inside text-gray-600">
          {subtitle.map((item, index) => (
            <li
              key={index}
              className="list-disc"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (typeof subtitle === "object" && subtitle !== null) {
      return (
        <div>
          <p className="text-gray-600">{subtitle.text}</p>
          <a
            href={subtitle.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="mt-4 px-4 py-2 bg-[#611232] text-white rounded-lg mx-auto block hover:bg-[#A57F2C]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {subtitle.buttonLabel}
            </motion.button>
          </a>
        </div>
      );
    } else {
      return <p className="text-gray-600">{subtitle}</p>;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <motion.div
          layoutId={item.id}
          key={item.id}
          className="p-4 bg-white shadow-lg rounded-lg cursor-pointer"
          onClick={() => setSelectedId(item.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.h2 className="text-lg font-bold text-gray-900 text-center mb-2">
            {item.title}
          </motion.h2>
          <motion.div>{renderSubtitle(item.subtitle)}</motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              className="p-8 bg-white rounded-lg mx-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.h2 className="text-3xl font-bold text-gray-900 mb-2">
                {items.find((item) => item.id === selectedId)?.title}
              </motion.h2>
              <motion.div className="text-justify text-2xl">
                {renderSubtitle(
                  items.find((item) => item.id === selectedId)?.subtitle
                )}
              </motion.div>

              <motion.button
                className="mt-4 px-4 py-2 bg-[#611232] text-white rounded-lg mx-auto block"
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardComponent;
